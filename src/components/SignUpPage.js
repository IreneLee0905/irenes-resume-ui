import * as React from "react";
import FormGroup from "reactstrap/src/FormGroup";
import Label from "reactstrap/src/Label";
import Input from "reactstrap/src/Input";
import {Form} from "react-bootstrap";
import {login} from "../action/actions";


class SignUpPage extends React.Component {

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
    this.submitUser = this.submitUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {

  }

  submitUser() {
    this.props.dispatch(login(this.state.account, this.state.password));
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

          <button className="btn btn-info " onClick={this.submitUser}>Submit</button>
        </Form>

      </div>
    )

  }

};

export default SignUpPage;