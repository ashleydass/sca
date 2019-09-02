import React from 'react';
import { findByTestAttribute, checkProps } from '../../../util';
import { shallow } from 'enzyme';
import SubmitButton from './index';

describe('SubmitButton Component', () => {
  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
        const expectedProps = {
          buttonText: "Button 1"
        };
        const propsError = checkProps(SubmitButton, expectedProps);
        expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {

    let wrapper;
    beforeEach(() => {
        const props = {
            buttonText: 'Button Text'
        };
        wrapper = shallow(<SubmitButton {...props} />);
    });

    it('Should Render a button', () => {
        const button = findByTestAttribute(wrapper, 'SubmitButton');
        expect(button.length).toBe(1);
    });
  });
})
