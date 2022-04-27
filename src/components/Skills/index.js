
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import "./style.css";

function Skills() {


  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="all">
  <Row>

      <Nav variant="pills" className="flex">
        <Nav.Item>
          <Nav.Link eventKey="frontend">Front-end</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="backend">Back-end</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="frontend">
          <Row>
          <Col>
            HTML
            <br />
        CSS
        <br />
        Javascript
            </Col>
            <Col>
            Bootstrap
            <br />
        jQuery
        <br />
        React
            </Col>

  
          </Row>
            
        </Tab.Pane>
        <Tab.Pane eventKey="all">
        <Row>
          <Col>
            HTML
            <br />
        CSS
        <br />
        Javascript
            </Col>
            <Col>
            Bootstrap
            <br />
        jQuery
        <br />
        React
            </Col>
        <Col>
        GraphQL
        <br />
        MongoDB
        <br />
        SQL
        </Col>
        <Col>
        Express.js
        <br />
        Node.js
        <br />
        Heroku
        </Col>
  
          </Row>

        </Tab.Pane>
        <Tab.Pane eventKey="backend">
          <Row>

          <Col>
        GraphQL
        <br />
        MongoDB
        <br />
        SQL
        </Col>
        <Col>
        Express.js
        <br />
        Node.js
        <br />
        Heroku
        </Col>
  
          </Row>
        </Tab.Pane>
      </Tab.Content>

  </Row>
</Tab.Container>
  );
}

  
  export default Skills;