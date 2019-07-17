import React from 'react';
import { shallow } from 'enzyme';

import SearchVariants from './SearchVariants';
import Preview from './Preview';
import Variants from './Variants';

describe('<SearchVariants />', () => {
  it('should shallowRender', () => {
    // Render the SearchVariants
    const wrapper = shallow(<SearchVariants />);
    expect(wrapper).toBeDefined();
  });
  it('should render a Preview component', () => {
    const wrapper = shallow(<SearchVariants />);
    expect(wrapper.find(Preview)).toHaveLength(1);
  });
  it('should render a Variants component', () => {
    const wrapper = shallow(<SearchVariants />);
    expect(wrapper.find(Variants)).toHaveLength(1);
  });
});