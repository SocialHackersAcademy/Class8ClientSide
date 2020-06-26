import React, { Component } from "react";
import { Button, Row, Col, Label, FormGroup, Input, card } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container offset-2">
        <div className="col-12">
          <h3>Organization Registration</h3>
        </div>
        <div className="row">
          <div className="col-12 col-md-9 mt-5">
            <LocalForm>
              <Label for="name">Member 1</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="membername1"
                      id="membername1"
                      placeholder="First Name"
                      onChange={handleChange("membername1")}
                      defaultValue={values.membername1}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="title1"
                      name="title1"
                      id="surname"
                      placeholder="Surname"
                      onChange={handleChange("title1")}
                      defaultValue={values.title1}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Label for="name">Member 2</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="membername2"
                      id="membername2"
                      placeholder="First Name"
                      onChange={handleChange("membername2")}
                      defaultValue={values.membername2}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="surname"
                      name="title2"
                      id="title2"
                      placeholder="Surname"
                      onChange={handleChange("title2")}
                      defaultValue={values.title2}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Label for="name">Member 3</Label>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="firstname"
                      name="membername3"
                      id="membername3"
                      placeholder="First Name"
                      onChange={handleChange("membername3")}
                      defaultValue={values.membername3}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="surname"
                      name="title3"
                      id="title3"
                      placeholder="Surname"
                      onChange={handleChange("title3")}
                      defaultValue={values.title3}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 10 }}>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.back}
                    block
                    className="offset-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={this.continue}
                    block
                    className="offset-1"
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;
