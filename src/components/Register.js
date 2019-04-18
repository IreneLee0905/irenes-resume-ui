import * as React from "react";
import {FormGroup, Input, Label} from "reactstrap";
import {Form} from "react-bootstrap";
import {addOne} from "../action/actions";
import {CustomerEvents} from "../constant/event";
import {CustomerUrls} from "../utils/Urls";
import connect from "react-redux/es/connect/connect";

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
      console.log("add user success!");
    }));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    return (

      <div>
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
    )

  }

}
const mapStateToProps = (state) => {
  return {
    customer: state.customer
  }
};
export default connect(mapStateToProps)(Register);