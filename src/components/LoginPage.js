import React from "react";
import {connect} from 'react-redux'
import {Button, ButtonToolbar, Form} from "react-bootstrap";
import {FormGroup, FormText, Input, Label} from "reactstrap";
import {addUser} from "../action/actions";
class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('user=' , nextProps);
  }

  componentDidMount() {
    console.log("did mount"+this.props.user.name);

  }

  submitUser(){
    this.props.dispatch(addUser(this.state.name));
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">User Name</Label>
            <Input type="email" name="name" id="userName" placeholder="User Name" value={this.state.name}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
          </FormGroup>

          <Button onClick={this.submitUser}>Submit</Button>
        </Form>
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