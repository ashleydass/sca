import { useState, useEffect } from "react";
import axios from 'axios';

function useFormValidation(initialState, validate, dispatch) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(true);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur(event) {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    const noErrors = Object.keys(validationErrors).length === 0;

    if (!noErrors) {
      return;
    }
    setSubmitting(true);

    axios({
      baseURL: 'http://api:5000',
      data: {...values},
      method: "POST",
      url: 'api/profile'
    })
    .then(_ => dispatch({
      type: "SUBMIT_SUCCESS"
    }))
    .catch(_ => dispatch({
      type: "SUBMIT_FAILED"
    }))
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
