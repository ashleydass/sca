import React from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import BaseInput from '../form-control/base-input';
import SubmitButton from '../form-control/submit-button';

import './register.css';

const FirstName = () => <BaseInput label="First Name" name="firstName" type="text" isRequired={true} data-test="FirstName" />

const LastName = () => <BaseInput label="Last Name" name="lastName" type="text" isRequired={true} data-test="LastName" />

const Email = () => <BaseInput label="Email" name="email" type="email" isRequired={true} data-test="Email" />

const MobilePhone = () => <BaseInput label="Mobile Phone" name="mobilePhone" type="phone" data-test="MobilePhone" />

const Register = () => {
  return (
    <div data-test="RegisterComponent">
      <Form>
        <Row>
          <Col sm={12} lg={6}>
            <FirstName />
          </Col>
          <Col sm={12} lg={6}>
            <LastName />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            <Email />
          </Col>
          <Col sm={12} lg={6}>
            <MobilePhone />
          </Col>
        </Row>
        <Row>
          <Col>
            <SubmitButton data-test="SubmitButton" />
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Register;