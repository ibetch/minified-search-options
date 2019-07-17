import React from 'react';

const TextBlock = (props) => {
  return (
    <span className={`db background-gray text-${props.type} ${props.type == `header` || props.type == `subheader` ? 'center' : ''}`}></span>
  )
}
export default TextBlock;