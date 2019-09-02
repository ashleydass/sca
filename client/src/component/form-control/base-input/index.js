import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const BaseInput = ({ name, label, isRequired, type, placeHolderText, onChange }) => {
  return (
    <Form.Group controlId={name} data-test={`BaseInput-${type}-${name}`}>
      <Form.Label>{label} {isRequired && <RequiredSign />}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeHolderText}
        onChange={onChange}
        name={name}
      />
    </Form.Group>)
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'text', 'phone']).isRequired,
  placeHolderText: PropTypes.string
}

export default BaseInput;

export const RequiredSign = () => <span className="required-sign">*</span>