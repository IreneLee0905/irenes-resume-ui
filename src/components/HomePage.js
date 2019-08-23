import React from "react";
import connect from "react-redux/es/connect/connect";
import Photo from "../images/irene-photo.jpg";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {SocialIcon} from "react-social-icons";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  render() {
    let blockStyle = {background: "#240215", color: "#E7C6D9", padding: "50px 0px",borderRadius:"30px"};
    let educationStyle = {margin: "20px"};
    return (
      <Container>

        <Row style={{marginTop: "50px", marginBottom: "40px"}}>
          <Col xs={{span: 4, offset: 4}}>
            <Image src={Photo} roundedCircle fluid/>
          </Col>

        </Row>
        <div className="text-center" style={blockStyle}>

          <h1>Irene Lee </h1>
          <h1>Full Stack Software Developer</h1>
          <hr/>
          <h5>Java / HTML|CSS / Bootstrap / Javascript / React / NodeJS / SQL</h5>
          <div className="text-center">
            <SocialIcon style={educationStyle} url="https://www.linkedin.com/in/shuangshuanglee/"/>
            <SocialIcon style={educationStyle} bgColor="white" url="https://github.com/IreneLee0905"/>
            <SocialIcon style={educationStyle} bgColor="#DE0B0B" url="mailto:f228300k@gmail.com"/>
            <SocialIcon style={educationStyle} url="https://irenelee.000webhostapp.com/"/>
          </div>

        </div>
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.entity
  }
};
export default connect(mapStateToProps)(HomePage);