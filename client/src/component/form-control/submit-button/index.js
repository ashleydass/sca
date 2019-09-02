import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function SubmitButton({ buttonText, disabled }) {
  return (
    <Button variant="dark" type="submit" data-test="SubmitButton" disabled={disabled} >
      {buttonText}
    </Button>
  )
}

SubmitButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default SubmitButton

