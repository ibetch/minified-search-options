import React from 'react';
import Site from './Site';
import ButtonClose from './ButtonClose';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <header className="background-gray">
          <h2>Preview</h2>
        </header>
        
        <Site />
        <ButtonClose />
      </div>
      
    );
  }
}

export default Preview;