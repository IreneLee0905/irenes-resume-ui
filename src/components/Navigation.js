
import React from 'react';
import { Button } from 'reactstrap';
class Navigation extends React.Component {
  render() {
    return (
      <div className=" alert alert-danger" role="alert">
        <Button color="danger">Danger!</Button>
        This is a primary alert—check it out!
      </div>
    )
  }
}

export default Navigation;
