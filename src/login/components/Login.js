import React, { Component } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../css/login.css";

export default class Login extends Component {
  render() {
    return (
      <div style={{ height: "100vh", backgroundColor: "black" }}>
        <Row style={{ margin: "0", height: "90vh" }}>
          <Col style={{ backgroundColor: "#3D02EB" }} xs={7}>
            Esto es una imagen
          </Col>
          <Col xs={5}>
            <div className="flexcontainer">
              <h1 className="titulo-1" style={{ color: "#ffff" }}>
                Login
              </h1>
              <form>
                <div className="flexcontainer">
                <label>
                  Username:
                  <input type="text" name="user" />
                </label>
                <br/>
                <label >
                  Password:
                  <input type="password" name="password" />
                </label>
                <br/>
                <a className="boton" type="submit">Log In</a>
              </div>
              </form>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: "0", height: "10vh" }}>
          <h2>Footer</h2>
        </Row>
      </div>
    );
  }
}
