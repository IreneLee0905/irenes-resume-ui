import * as React from "react";
// import {Form, Input, Label} from "reactstrap";
import Form from 'react-bootstrap/Form';
import {addOne, showAlert} from "../action/actions";
import {CustomerEvents} from "../constant/event";
import {CustomerUrls} from "../utils/Urls";
import connect from "react-redux/es/connect/connect";
import Message from "../container/Message";
import Rocket from "../images/rocket.jpg";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import Form from 'react-bootstrap/Form'
class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      id: '',
      account: '',
      password: '',
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitCustomer = this.submitCustomer.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  submitCustomer() {
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


  render() {
    return (

      <div>
        <Message/>
        <div className="row">
          <br/>
          <div className="col-sm-6">
            <br/><br/>
            <img className="img-fluid" src={Rocket} alt="rocket image"/>
          </div>
          <div className="col-sm-6">
            <h2>Join Us</h2>
            <Form onSubmit={this.submitCustomer}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={this.handleChange}
                              value={this.state.account}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group as={Col} controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="date">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="month">
                  <Form.Label> </Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="year">
                  <Form.Label> </Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St"/>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control/>
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out"/>
              </Form.Group>
              <Button variant="info" type="submit">
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