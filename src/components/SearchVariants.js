import React from 'react';
import Variants from './Variants';
import Preview from './Preview';

class SearchVariants extends React.Component {
  render() {
    return (
      <div>
        <h1>Search Variants</h1>
        <Variants />
        <Preview />
      </div>
      
    );
  }
}
export default SearchVariants;