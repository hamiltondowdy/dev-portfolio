import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {  Button, Row } from "react-bootstrap";
import "./style.css";
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
          <div className="row justify-content-space-between" id="map">
         
            <Row id="map">
            <Button
            onClick={() => this.toggleLoader()}
            variant={"shadow-none"}
            size="lg"
            class="grow bounce"
            id="butt"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/home.png"/>
          </Button>
            </Row>
       

          {this.state.loading ? (
            <Navigation />
          ) : null}

          
        </div>
  
      </div>
      </div>
    );
  }
}

export default Headbutt;