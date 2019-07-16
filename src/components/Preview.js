import React from 'react';
import PreviewSite from './PreviewSite';
import ButtonClose from './ButtonClose';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <header className="background-gray">
          <h2>Preview</h2>
        </header>
        
        <PreviewSite />
        <ButtonClose />
      </div>
      
    );
  }
}

export default Preview;