import React, { CSSProperties } from 'react';
import { LoaderContext } from '../context';




// interface Props
// {
//   refIsLoading?: boolean;
//   attributes?: 
//   {
//     size: number;
//     type: string;
//     color?: string;
//     rider?: string;
//     wrapperHeight?: number;
//   };
// }



//Loader returns 'minor loader' (without wrapper) or 'major loader' (with wrapper) depending on context 
export default function Loader()
{
  return (
    <LoaderContext.Consumer>
      {
        ({refIsLoading, attributes}: any) => 
        {
          let circlesStyle: CSSProperties = 
          {
            height: attributes.size,
            width: attributes.size,
            background: attributes.color || '#333',
            display: 'inline-block',
            borderRadius: '50%',
            boxShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)',
            marginRight: 5,
          },
          loaderWrapperStyle: CSSProperties = 
          {
            visibility: refIsLoading ? 'visible' : 'hidden',
            opacity: refIsLoading ? 1 : 0,
            position: 'absolute',
            width: '100%',
            background: 'rgba(50, 50, 50, 0)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            bottom: 0,
            height: attributes.wrapperHeight,
            flexDirection: 'column',
            color: attributes.color,
            textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.2)'
          },
          loaderStyle: CSSProperties = 
          {
            display: 'block',
            textAlign: 'center',
            position: attributes.type === 'minor' ? 'absolute' : 'static',
            visibility: refIsLoading ? 'visible' : 'hidden',
            opacity: refIsLoading ? 1 : 0
          };
    
    
          let minorLoader: React.ReactElement = 
                <span className='loader' style={loaderStyle}>
                  <span className='loader-circle' style={circlesStyle}></span>
                  <span className='loader-circle' style={circlesStyle}></span>
                  <span className='loader-circle' style={circlesStyle}></span>
                </span>,
              majorLoader: React.ReactElement = 
                <div className='loader-wrapper' style={loaderWrapperStyle}>
                  {minorLoader}
                  <span
                    className='loader-rider'
                    style={{fontSize: 13, marginTop: 10}}
                  >{attributes.rider}</span>
                </div>;
          
          //loader animation style in CSS (index.css) file
        
          return attributes.type === 'minor' ? minorLoader : majorLoader;
        }
      }
    </LoaderContext.Consumer>
  );
}