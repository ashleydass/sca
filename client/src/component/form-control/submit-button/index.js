import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function SubmitButton({ buttonText }) {
  return (
    <Button variant="dark" type="submit" data-test="SubmitButton">
      {buttonText}
    </Button>
  )
}

SubmitButton.propTypes = {
  buttonText: PropTypes.string.isRequired
}

export default SubmitButton

