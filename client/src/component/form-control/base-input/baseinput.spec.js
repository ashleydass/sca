import React from 'react';
import { shallow } from 'enzyme';
import Form from 'react-bootstrap/Form';
import { checkProps, findByTestAttribute } from '../../../util';
import BaseInput, { RequiredSign } from './index';

describe('BaseInput Component', () => {
  describe('Checking PropTypes', () => {

    it('Should NOT throw a warning', () => {
        const expectedProps = {
          name: "Input Name",
          label: "Label",
          isRequired: true,
          type: "email",
          placeHolderText: "Place Holder",
          values: {},
          errors: {}
        };
        const propsError = checkProps(BaseInput, expectedProps);
        expect(propsError).toBeUndefined();
    });
  });

  describe('Render', () => {
    let wrapper;
    let mockOnChange;
    let props;

    beforeEach(() => {
      mockOnChange = jest.fn();
      props = {
        name: "Input Name",
        label: "Label",
        isRequired: true,
        type: "email",
        placeHolderText: "Place Holder",
        onChange: mockOnChange
      }
      wrapper = shallow(<BaseInput {...props} />);
    });

    it('Renders as expected', () => {
      const component = findByTestAttribute(wrapper, `BaseInput-${props.type}-${props.name}`);
      expect(component.length).toBe(1);
    })

    it('Renders Required Sign', () => {
      props = {
        name: "Input Name",
        label: "Label",
        isRequired: true,
        type: "email",
        placeHolderText: "Place Holder",
        onChange: mockOnChange
      }
      wrapper = shallow(<BaseInput {...props} />);

      const component = wrapper.find(RequiredSign);
      expect(component.length).toBe(1);
    })

    it('Does not render Required Sign', () => {
      props = {
        name: "Input Name",
        label: "Label",
        isRequired: false,
        type: "email",
        placeHolderText: "Place Holder",
        onChange: mockOnChange
      }
      wrapper = shallow(<BaseInput {...props} />);

      const component = wrapper.find(RequiredSign);
      expect(component.length).toBe(0);
    })

    it('Executes mock onChange', () => {
      wrapper.find(Form.Control).simulate('change');
      const callback = mockOnChange.mock.calls.length;
      expect(callback).toBe(1);
    })
  });
})
