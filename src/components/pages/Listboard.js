import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export class Listboard extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Listboard</BreadcrumbItem>
        </Breadcrumb>
        <p>
          scroll on our registered NGOs since you have refused to register, see
          your friend growing higher while you are dying with corona. enjoy
          before we say bye bye.
        </p>
      </div>
    );
  }
}

export default Listboard;
