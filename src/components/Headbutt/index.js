import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Row } from "react-bootstrap";
import "./style.css";
import Socials from "../Socials";

class Headbutt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  toggleLoader = () => {
    if (!this.state.loading) {
      this.setState({ loading: true });
    } else {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <div className="btnContainer">
            <Row>
            <Button
            onClick={() => this.toggleLoader()}
            variant={"shadow-none"}
            size="lg"
            id="butt"
          >
            {this.state.loading ? "-" : "+"}
          </Button>
            </Row>
       

          {this.state.loading ? (
            <Socials />
          ) : null}

          
        </div>
      </div>
    );
  }
}

export default Headbutt;