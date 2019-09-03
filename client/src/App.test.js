import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttribute, testStore } from './util/common';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};


describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {}
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttribute(wrapper, 'AppComponent');
    expect(component.length).toBe(1);
  });
})