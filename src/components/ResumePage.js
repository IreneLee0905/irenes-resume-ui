import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Photo from "../images/irene-photo.jpg";
import {SocialIcon} from "react-social-icons";

class ResumePage extends React.Component {


  constructor() {
    super();
    this.state = {}
  }


  render() {
    let educationStyle = {margin: "15px"};

    return (
      <Container fluid>

        <Row style={{margin: "30px"}}>
          <Col xs={4} style={{backgroundColor: "white", color: "#240215"}}>
            <Row className="justify-content-md-center" style={{margin: "50px"}}>
              <Col xs={8}>
                <Image src={Photo} roundedCircle fluid/>
              </Col>
            </Row>
            <h1 className="text-center">Irene Lee</h1>
            <h2 className="text-center">Software Developer</h2>

            <hr/>
            <p className="text-center">Full-stack developer with more than two years of experience in system development.
              Specialized in Java RESTful API development and React, jQuery development and agile software development.
              Involved in full-stack product developing, system analysis, system design, requirements gathering.
            </p>
            <div className="text-center">
              <SocialIcon style={educationStyle} url="https://www.linkedin.com/in/shuangshuanglee/"/>
              <SocialIcon style={educationStyle} bgColor="#240215" url="https://github.com/IreneLee0905"/>
              <SocialIcon style={educationStyle} bgColor="#A80000" url="mailto:f228300k@gmail.com"/>
              <SocialIcon style={educationStyle} url="https://irenelee.000webhostapp.com/"/>
            </div>


          </Col>
          <Col xs={8} style={{weight: "100px", background: "#240215", color: "#E7C6D9", padding: "50px"}}>
            <h1>Education</h1>
            <Row style={educationStyle}>
              <Col xs={4} className="text-center">
                July 2018 - June 2019
              </Col >
              <Col xs={{span:7,offset:1}} className="text-center">
                <h5>Melbourne Polytechnic</h5>
                <h6>&nbsp;&nbsp;Information Technology</h6>
              </Col>
            </Row>
            <Row style={educationStyle}>
              <Col xs={4} className="text-center">
                July 2015 - February 2016
              </Col>
              <Col xs={{span:7,offset:1}} className="text-center">
                <h5>Institute for Information Industry</h5>
                <h6> &nbsp;&nbsp;Programming Development in Java</h6>
              </Col>
            </Row>
            <Row style={educationStyle}>
              <Col xs={4} className="text-center">
                September 2012 - June, 2015
              </Col>
              <Col xs={{span:7,offset:1}} className="text-center">
                <h5>Hwa Shia University of Technology</h5>
                <h6>&nbsp;&nbsp;Digital Media Design</h6>
              </Col>
            </Row>
            _____________________________________________________
            <br/><br/>
            <h1>Work Experience</h1>
            <Row style={educationStyle}>
              <Col xs={5}><h4>SOFTLEADER TECHNOLOGY</h4></Col>
              <Col className="text-right">
                TAIPEI CITY, TAIWAN 02/2016 – 05/2018<br/>
                FULL-STACK DEVELOPER
              </Col>
            </Row>
            <Row style={educationStyle}>
              <Col>
                <p>
                  Developed a full-stack B2C web application “Tokio Marine Newa travel insurance “ for customer buying
                  travel insurance online. And build an internal management system for client to get reports and
                  maintain
                  their products. This Project using jQuery for building front-end site, Java EE, Tomcat and MSSQL for
                  backend site SOAP structure.
                </p>
                <p>
                  Developed B2B internal management system for “Yuanta Life Insurance company” using Scrum to run this
                  project and jQuery to build front-end page, Spring MVC framework and IBM WebSphere to build backend
                  system.
                </p>
                <p>
                  Developed B2B internal management systems with Micro Service structure for “First Life” and “Mega
                  bank” insurance company. Using DevOps technical skills including Docker, Kubernetes, and Jenkins to
                  automatically test and deploy our products. React and Redux was used to create the front-end
                  components,
                  and we choose Java Spring Cloud framework to build our back-end micro service.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.entity
  }
};

export default connect(mapStateToProps)(ResumePage);