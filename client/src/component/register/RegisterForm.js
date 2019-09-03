import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BaseInput from '../form-control/base-input/BaseInput';
import SubmitButton from '../form-control/submit-button/SubmitButton';
import useFormValidation from '../../hooks/useFormsValidation';
import validate from '../../util/validate';

import './register.css';

export const FirstName = (props) => <BaseInput label="First Name" name="firstName" type="text" isRequired={true} data-test="FirstName" {...props} />

export const LastName = (props) => <BaseInput label="Last Name" name="lastName" type="text" isRequired={true} data-test="LastName" {...props} />

export const Email = (props) => <BaseInput label="Email" name="email" type="email" isRequired={true} data-test="Email" {...props} />

export const MobilePhone = (props) => <BaseInput label="Mobile Phone" name="mobilePhone" type="phone" data-test="MobilePhone" {...props} />

const INITIAL_STATE = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@email.com",
  mobilePhone: "123456789"
}

const Register = _ => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validate, dispatch);
  const submitSuccess = useSelector(state => state.form.submitSuccess);

  const FormSubmittedSuccessfully = () => <div className="center-screen">Thank you for subscribing!</div>
  const FormSubmittionFailed = () => <div className="center-screen">Form could not be submitted</div>
  const SubscriptionForm = () => (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col sm={12} lg={6}>
          <FirstName onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} />
        </Col>
        <Col sm={12} lg={6}>
          <LastName onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <Email onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} />
        </Col>
        <Col sm={12} lg={6}>
          <MobilePhone onChange={handleChange} onBlur={handleBlur} values={values} errors={errors} />
        </Col>
      </Row>
      <Row>
        <Col>
          <SubmitButton data-test="SubmitButton" buttonText="Submit" disabled={isSubmitting} />
        </Col>
      </Row>
    </Form>)

  return (
    <div data-test="RegisterComponent">
      {submitSuccess && <FormSubmittedSuccessfully />}
      {submitSuccess == null && <SubscriptionForm />}
      {submitSuccess === false && <FormSubmittionFailed />}
    </div>
  )
}

export default Register;