import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from 'app/components/hello-world/component';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Mounts', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Handles click events', () => {
    const component = wrapper.instance();

    expect(component.handleClick).toEqual(expect.any(Function));
  });
});
