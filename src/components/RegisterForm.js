
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker/es";
import Button from "react-bootstrap/Button";
import React from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
const RegisterForm = ({customer, handleSubmit}) => {
  return (
    <>
      <Formik
        initialValues={customer}
        onSubmit={(value, action) => {
          handleSubmit(value);
        }}
      >
        {({customer,handleChange,handleBirthdayChange}) => (
          <Form noValidate validated={this.state.validated} onSubmit={this.submitCustomer}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="account" type="email" placeholder="Enter your email" onChange={handleChange}
                            value={customer.account}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}
                              value={this.state.password}/>
              </Form.Group>
              <Form.Group as={Col} controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="confirmPassword" type="password" placeholder="Password"
                              onChange={handleChange} value={customer.confirmPassword}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="firstName" onChange={handleChange}
                              value={customer.firstName}/>
              </Form.Group>
              <Form.Group as={Col} controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleChange}
                              value={customer.lastName}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="birthday">
                <Form.Label>Birthday</Form.Label>
                <DatePicker className="form-control"
                            selected={customer.birthday}
                            onChange={handleBirthdayChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="Country">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" name="gender" onChange={handleChange} value={customer.gender}>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <div>

            </div>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="1234 Main St" name="address" onChange={handleChange}
                            value={customer.address}/>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" onChange={handleChange} value={customer.city}/>
              </Form.Group>

              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" onChange={handleChange} value={customer.state}/>

              </Form.Group>

              <Form.Group as={Col} controlId="zip">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" name="zipCode" onChange={handleChange} value={customer.zipCode}/>
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>)
        }}
      </Formik>
    </>
  )

};
export default RegisterForm;