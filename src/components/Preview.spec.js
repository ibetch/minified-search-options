import React from 'react';
import { shallow } from 'enzyme';

import Preview from './Preview';
import SearchForm from './SearchForm';
import ButtonClose from './ButtonClose';

describe('<Preview />', () => {
  it('should shallowRender', () => {
    // Render the Preview
    const wrapper = shallow(<Preview />);
    expect(wrapper).toBeDefined();
  });
  it('should render a SearchForm component', () => {
    const wrapper = shallow(<Preview />);
    expect(wrapper.find(SearchForm)).toHaveLength(1);
  });
  it('should render a ButtonClose component', () => {
    const wrapper = shallow(<Preview />);
    expect(wrapper.find(ButtonClose)).toHaveLength(1);
  });
});