import React from 'react';

const Image = (props) => {
  return (
    <div className={`image image-${props.type}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="1 3 22 18" className="svgIcon"><path fill="none" d="M24 24H0V0h24v24z"/><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>
    </div>
  )
}
export default Image;