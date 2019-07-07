import * as React from "react";
import {connect} from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import {closeAlert} from "../action/actions";


class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: '',
      color: 'danger'

    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({visible: false});
    this.props.dispatch(closeAlert());
  }

  render() {
    return (
      <Alert variant={this.state.color} show={this.state.visible} toggle={this.onDismiss}>
        {this.state.message}
      </Alert>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.message) {
      this.setState(Object.assign({}, {
        visible: nextProps.showMsg,
        color: nextProps.type,
        message: nextProps.message
      }),()=>{console.log(this.state)})
    }
  }


}

const mapStateToProps = (state) => {
  return {
    message: state.message.message,
    showMsg: state.message.show,
    type: state.message.type,
  }
};

export default connect(mapStateToProps)(Message);