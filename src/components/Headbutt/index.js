import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Row } from "react-bootstrap";
import "./style.css";
import Socials from "../Socials";
import Navigation from "../Navigation";

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
          <div className="row justify-content-center">
          <div className="col-1">
            <Row>
            <Button
            onClick={() => this.toggleLoader()}
            variant={"shadow-none"}
            size="lg"
            class="grow"
            id="butt"
          >
            {this.state.loading ? "-" : "+"}
          </Button>
            </Row>
       

          {this.state.loading ? (
            <Navigation />
          ) : null}

          
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Headbutt;