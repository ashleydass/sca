import React from 'react';
import { shallow } from 'enzyme';
import SubmitButton from '../form-control/submit-button';
import Register, { FirstName, LastName, Email, MobilePhone } from './index';

describe('Register Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Register />);
  })

  it('Renders without errors', () => {
    expect(wrapper.length).toBe(1);
  })

  it('Renders all components', () => {
    expect(wrapper.find(FirstName).dive().find('[data-test="FirstName"]').length).toBe(1);
    expect(wrapper.find(LastName).dive().find('[data-test="LastName"]').length).toBe(1);
    expect(wrapper.find(Email).dive().find('[data-test="Email"]').length).toBe(1);
    expect(wrapper.find(MobilePhone).dive().find('[data-test="MobilePhone"]').length).toBe(1);
    expect(wrapper.find(SubmitButton).dive().find('[data-test="SubmitButton"]').length).toBe(1);
  })
})
