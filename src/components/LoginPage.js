import React from "react";
import {connect} from 'react-redux'
import {Form} from "react-bootstrap";
import {FormGroup, Button, Input, Label} from "reactstrap";
import {login} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {

      id: '',
      account: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.user) {
      if (nextProps.user.id) {
        this.setState(Object.assign({}, nextProps.user));
      } else {
        this.setState({
          id: '',
          account: '',
          password: ''
        })
      }
    }
  }

  componentDidMount() {
    console.log("did mount" + this.props.user.account);

  }

  submitUser() {
    this.props.dispatch(login(this.state.account, this.state.password));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="col-sm-4">
        <Form>
          <FormGroup>
            <Label for="account">Account</Label>
            <Input type="text" name="account" id="account" placeholder="Account" value={this.state.account}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.password}
                   onChange={this.handleChange}/>
          </FormGroup>

          <button type="button" className="btn btn-info" onClick={this.submitUser}>Submit</button>
        </Form>
        {!!AppContextProvider.isPrincipal() && <div>login successful！</div>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};
export default connect(mapStateToProps)(LoginPage);