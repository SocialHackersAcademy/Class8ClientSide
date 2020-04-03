import React, { Component } from "react";
import OrganizationCard from "../OrganizationCard";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
export class Listboard extends Component {
  render() {
    return (
      <div className="">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Listboard</BreadcrumbItem>
        </Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">
                Organizations to Checkout
              </h1>
              <p className="lead text-center">
                Browse and connect with other NGO's
              </p>
              <OrganizationCard />
              <OrganizationCard />
              <OrganizationCard />
              <OrganizationCard />
              <OrganizationCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listboard;
