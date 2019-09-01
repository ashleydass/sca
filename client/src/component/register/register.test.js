import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute } from '../../util';
import Register from './index';

describe('Register Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  })

  it('Renders without errors', () => {
    expect(wrapper.length).toBe(1);
  })

  const components = [
    'RegisterComponent',
    'FirstName',
    'LastName',
    'Email',
    'MobilePhone',
    'SubmitButton'
  ];

  components.forEach(c => {
    it(`Contains ${c}`, () => {
      const component = findByTestAttribute(wrapper, c);
      expect(component.length).toBe(1);
    })
  })
})
