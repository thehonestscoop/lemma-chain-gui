import React from 'react';



const Item = React.forwardRef((props: any, refItemWrapper: any) =>
{
  const appendURL = <a
                      href={props.externLink}
                      target='_blank'
                      className='extern-link'
                      rel='noopener noreferrer'>
                      <img className='extern-link-icon' src="link.png" alt="link" />
                    </a>;
  return (
    <div
      className='item-wrapper'
      data-data={props.data}
      data-id={props.id}
      onClick={(e) => props.handleReferenceClick(e)}
      ref={refItemWrapper}>
      <li className='item'>
        <span className='props'>Title: <b>{props.data.title}</b></span>
        <span className='props'>Author{props.data.authors.length > 1 ? 's' : ''}: {props.data.authors.join(', ')}</span>
        <span className='props'>Ref. ID: <b>{props.id}</b></span>
        {props.externLink ? appendURL : ''}
      </li>
    </div>
  );
});



export default Item;