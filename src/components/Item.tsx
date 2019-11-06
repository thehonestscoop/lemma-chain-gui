import React from 'react';
import { mapProps4state } from '../redux/state';
import { connect } from 'react-redux';
import handleReferenceClick from '../widget-methods/handleReferenceClick';



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
      data-data={props.payload.data}
      data-id={props.payload.id}
      onClick={(e) => handleReferenceClick(e, props)}
      ref={refItemWrapper}>
      <li className='item'>
        <span className='props'>Title: <b>{props.payload.data.title}</b></span>
        <span className='props'>Author{props.payload.data.authors.length > 1 ? 's' : ''}: {props.payload.data.authors.join(', ')}</span>
        <span className='props'>Ref. ID: <b>{props.payload.id}</b></span>
        {props.externLink ? appendURL : ''}
      </li>
    </div>
  );
});

const mapStateToProps = mapProps4state(['payload']);

export default connect(mapStateToProps)(Item);