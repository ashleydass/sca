import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const BaseInput = (props) => {
  const { name, label, isRequired, type, placeHolderText } = props;
  const { onChange, onBlur, values, errors } = props;

  const value = values && values[name];

  return (
    <Form.Group controlId={name} data-test={`BaseInput-${type}-${name}`}>
      <Form.Label>{label} {isRequired && <RequiredSign />}</Form.Label>
      <Form.Control
        className={errors && errors[name] && "error-input"}
        type={type}
        placeholder={placeHolderText}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value}
      />
      {errors && errors[name] && <p className="error-text">{errors[name]}</p>}
    </Form.Group>)
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text', 'phone']).isRequired,
  placeHolderText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object
}

export default BaseInput;

export const RequiredSign = () => <span className="required-sign">*</span>