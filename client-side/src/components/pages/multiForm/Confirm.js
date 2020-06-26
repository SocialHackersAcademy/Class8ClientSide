import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../../actions/authActions';

import {
  Button,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { LocalForm } from 'react-redux-form';

export class Confirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(e) {
    console.log(this.props.auth);
    e.preventDefault();
    const {
      values: {
        ngoName,
        email,
        password,
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
        year,
      },
      history,
      registerUser,
    } = this.props;

    const myNgoStructure = {
      logo: image,
      name: ngoName,
      email,
      password,
      address,
      phone: phoneNumber,
      industry,
      description,
      year,
      // Since were supposed to send a comma separated array of values
      services: services.split(','),
      keyword: keywords.split(','),
      teammembers: [
        {
          name: membername1,
          title: title1,
        },
        {
          name: membername2,
          title: title2,
        },
        {
          name: membername3,
          title: title3,
        },
      ],
    };
    // Connect to redux
    registerUser(myNgoStructure, history);
    // Send the structure with history
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { ngoName, email, phoneNumber, address, description, services },
    } = this.props;
    return (
      <div className='container offset-2'>
        <div className='col-12'>
          <h3>Confirm Registration</h3>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>CONFIRM</ModalHeader>
          <ModalBody>
            <h1>Thanks for the Registration</h1>
            <p>
              Don't worry we will send you more of your details through your
              email.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type='submit' color='primary' onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className='row'>
          <div className='col-12 col-md-9 mt-5'>
            <LocalForm>
              <Row className='form-group'>
                <Label htmlFor='ngoName' md={2}>
                  NGO Name:
                </Label>
                <Label htmlFor='ngoName' md={2}>
                  {ngoName}
                </Label>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='email' md={2}>
                  Email:
                </Label>
                <Label htmlFor='email' md={2}>
                  {email}
                </Label>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='phoneNumber' md={2}>
                  Phone Number:
                </Label>
                <Label htmlFor='phoneNumber' md={2}>
                  {phoneNumber}
                </Label>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='address' md={2}>
                  Address:
                </Label>
                <Label htmlFor='address' md={2}>
                  {address}
                </Label>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='description' md={2}>
                  Description:
                </Label>
                <Label htmlFor='description' md={2}>
                  {description}
                </Label>
              </Row>
              <Row className='form-group'>
                <Label htmlFor='services' md={2}>
                  Services:
                </Label>
                <Label htmlFor='services' md={2}>
                  {services}
                </Label>
              </Row>
              <Row className='form-group'>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button color='primary' onClick={this.back} block>
                    Back
                  </Button>
                  <Button
                    color='primary'
                    type='submit'
                    onClick={this.handleSubmit}
                    block
                  >
                    Submit
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Confirm));
