import React from "react";
import connect from "react-redux/es/connect/connect";


class HomePage extends React.component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<></>);
  }

}

const mapStateToProps = (state) => {
  return {
    customer: state.customer
  }
};
export default connect(mapStateToProps)(HomePage);