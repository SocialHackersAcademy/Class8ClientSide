import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

export default class OrganizationCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="3">
              <img
                className="rounded-circle"
                src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                alt=""
              />
            </Col>
            <Col sm="4">
              <h3>Social Hackers</h3>
              <p>Web Development Bootcamp</p>
              <p>Athens Greece</p>
              <a
                href="profile.html"
                className="btn btn-primary"
              >
                View Organization
              </a>
            </Col>
            <Col sm="4">
              <h4>Services</h4>
              <ListGroup>
                <ListGroupItem>
                  <i className="fa fa-check pr-1"></i>
                  Tea
                </ListGroupItem>
                <ListGroupItem>
                  <i className="fa fa-check pr-1"></i>
                  Tea
                </ListGroupItem>
                <ListGroupItem>
                  <i className="fa fa-check pr-1"></i>
                  Tea
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
