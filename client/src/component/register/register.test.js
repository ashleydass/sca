import React from 'react';
import { shallow } from 'enzyme';
import { testStore } from '../../util/common';
import SubmitButton from '../form-control/submit-button/SubmitButton';
import Register, { FirstName, LastName, Email, MobilePhone } from './RegisterForm';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Register store={store} />);

  console.log(wrapper.debug());
  return wrapper;
};

describe('Register Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp()
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
