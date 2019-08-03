import * as React from "react";
import Form from 'react-bootstrap/Form';
import {addOne, showAlert} from "../action/actions";
import {CustomerEvents} from "../constant/event";
import {CustomerUrls} from "../utils/Urls";
import connect from "react-redux/es/connect/connect";
import Message from "../container/Message";
import Rocket from "../images/rocket.jpg";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";

//import css for react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      id: '',
      account: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      birthday: '',
      gender: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitCustomer = this.submitCustomer.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  submitCustomer() {
  
    console.log(this.state);
    console.log(process.env.PORT);
    this.props.dispatch(addOne(CustomerEvents.ADD_CUSTOMER, this.state, CustomerUrls.REST_CUSTOMER_ADD, () => {
      if (!!this.props.message) {
        this.props.dispatch(showAlert(this.props.message, "danger"));
      } else {
        this.props.dispatch(showAlert("successfully create a new account", "info"));
      }

    }));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleBirthdayChange(e) {
    this.setState({birthday: e});
  }

  render() {
    return (

      <div>
        <br/>
        <br/>
        <Message/>
        <div className="row">
          <br/>
          <div className="col-sm-6">
            <br/><br/>
            <img className="img-fluid" src={Rocket} alt="rocket image"/>
          </div>
          <div className="col-sm-6">
            <h1>Join Us</h1>
            <br/>
            <Form >
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="account" type="email" placeholder="Enter your email" onChange={this.handleChange}
                              value={this.state.account}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange}
                                value={this.state.password}/>
                </Form.Group>
                <Form.Group as={Col} controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control name="confirmPassword" type="password" placeholder="Password"
                                onChange={this.handleChange} value={this.state.confirmPassword}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="date">
                  <Form.Label>Birthday</Form.Label>
                  <DatePicker className="form-control"
                              selected={this.state.birthday}
                              onChange={this.handleBirthdayChange}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="Country">
                <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" name="gender" onChange={this.handleChange} value={this.state.gender} >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <div>

              </div>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" name="address" onChange={this.handleChange} value={this.state.address} />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" name="city" onChange={this.handleChange} value={this.state.city}/>
                </Form.Group>

                <Form.Group as={Col} controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" name="state" onChange={this.handleChange} value={this.state.state}/>
                
                </Form.Group>

                <Form.Group as={Col} controlId="zip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" name="zip" onChange={this.handleChange} value={this.state.zip}/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out"/>
              </Form.Group>
              <Button variant="info" type="button" onClick={this.submitCustomer}>
                Submit
              </Button>
            </Form>

            {/*<button type="button" className="btn btn-info " onClick={this.submitCustomer}>Submit</button>*/}

          </div>
        </div>
      </div>


    )

  }

}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.entity,
    message: state.customer.message
  }
};
export default connect(mapStateToProps)(Register);