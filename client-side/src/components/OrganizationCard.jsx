import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class OrganizationCard extends Component {
  render() {
    const {
      services,
      address,
      logo,
      name,
      industry
    } = this.props.ngo;
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="3">
              <img
                className="rounded-circle"
                src={logo}
                alt=""
              />
            </Col>
            <Col sm="4">
              <h3>{name}</h3>
              <p>{industry}</p>
              <p>{address}</p>
              <a href="#" className="btn btn-primary">
                View Organization
              </a>
            </Col>
            <Col sm="4">
              <h4>Services</h4>

              {services.map(service => (
                <ListGroup>
                  <ListGroupItem>
                    <i className="fa fa-check pr-1" />
                    {service}
                  </ListGroupItem>
                </ListGroup>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export default OrganizationCard;
