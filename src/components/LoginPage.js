import React from "react";
import {connect} from 'react-redux'
// import {Form} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

// import {FormGroup, Button, Input, Label} from "reactstrap";
import {login} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider";
import Message from "../container/Message";
import Container from "react-bootstrap/Container";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {

      id: '',
      account: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitCustomer = this.submitCustomer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.customer) {
      if (nextProps.customer.id) {
        this.setState(Object.assign({}, nextProps.customer));
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
    console.log("did mount" + this.props.customer.account);

  }

  submitCustomer() {
    this.props.dispatch(login(this.state.account, this.state.password));
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <Container className="bg-white" fluid style={{padding:"50px"}}>
        <div className="col-sm-4 mx-auto ">
          <br/>
          <Message/>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="account" value={this.state.account}
                            onChange={this.handleChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password}
                            onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.submitCustomer}>
              Submit
            </Button>
          </Form>
          {!!AppContextProvider.isPrincipal() && <div>login successful！</div>}
        </div>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.entity
  }
};
export default connect(mapStateToProps)(LoginPage);