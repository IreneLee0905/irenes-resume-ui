import * as React from "react";
import {FormGroup, Input, Label} from "reactstrap";
import {Form} from "react-bootstrap";
import {addOne, showAlert} from "../action/actions";
import {CustomerEvents} from "../constant/event";
import {CustomerUrls} from "../utils/Urls";
import connect from "react-redux/es/connect/connect";
import Message from "../container/Message";
import Rocket from "../images/rocket.jpg";
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
            <img className="img-fluid" src={Rocket} alt="rocket image"/>
          </div>
          <div className="col-sm-6">
            <h2>Join Us</h2>
            <Form>
              <FormGroup>
                <Label for="account">Account</Label>
                <Input type="text" name="account" id="account" placeholder="Account" value={this.state.account}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" value={this.state.password}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">First Name</Label>
                <Input type="text" name="firstName" id="firstName" value={this.state.firstName}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Last Name</Label>
                <Input type="text" name="lastName" id="lastName" value={this.state.lastName}
                       onChange={this.handleChange}/>
              </FormGroup>

              <button type="button" className="btn btn-info " onClick={this.submitCustomer}>Submit</button>
            </Form>
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