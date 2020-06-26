import React, { Component } from "react";
import NgoInfo from "./NgoInfo";
import NgoDetails from "./NgoDetails";
import TeamMembers from "./TeamMembers";
import Confirm from "./Confirm";

export class NgoForm extends Component {
  state = {
    step: 1,
    ngoName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    image: "",
    industry: "",
    description: "",
    services: "",
    keywords: "",
    membername1: "",
    title1: "",
    membername2: "",
    title2: "",
    membername3: "",
    title3: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      ngoName,
      email,
      password,
      phoneNumber,
      year,
      address,
      image,
      industry,
      description,
      services,
      keywords,
      membername1,
      title1,
      membername2,
      title2,
      membername3,
      title3,
    } = this.state;
    const values = {
      ngoName,
      email,
      password,
      year,
      phoneNumber,
      address,
      image,
      industry,
      description,
      services,
      keywords,
      membername1,
      title1,
      membername2,
      title2,
      membername3,
      title3,
    };

    switch (step) {
      case 1:
        return (
          <NgoInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <NgoDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <TeamMembers
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default NgoForm;
