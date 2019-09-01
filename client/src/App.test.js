import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttribute } from './util';

describe('App Component', () => {
  it('Renders without errors', () => {
    const component = shallow(<App />);
    expect(component.length).toBe(1);
  })

  it('Contains AppComponent', () => {
    const component = shallow(<App />);
    const appComponent = findByTestAttribute(component, 'AppComponent');
    expect(appComponent.length).toBe(1);
  })
})