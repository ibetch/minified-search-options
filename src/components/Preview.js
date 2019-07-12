import React from 'react';
import SearchForm from './SearchForm';
import ButtonClose from './ButtonClose';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <h2>Preview</h2>
        <SearchForm />
        <ButtonClose />
      </div>
      
    );
  }
}

export default Preview;