import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      contactno: "",
      sex: "",
      address: "",
      city: "",
      zip: "",
      inquiry: "",
      inquiryOtherDetails: "",
      termcond: false,
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormInput = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    document.title = "Contact";
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="fullname">Name</Label>
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="Enter Full Name"
                  type="text"
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="contactno">Contact No.</Label>
                <Input
                  id="contactno"
                  name="contactno"
                  placeholder="Enter Contact No."
                  type="text"
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="sex">Sex</Label>
                <Input
                  id="sex"
                  name="sex"
                  type="select"
                  onChange={this.handleFormInput}
                >
                  <option defaultChecked>Select sex</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="Enter Address"
              onChange={this.handleFormInput}
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input id="city" name="city" onChange={this.handleFormInput} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input id="zip" name="zip" onChange={this.handleFormInput} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup tag="fieldset">
            <legend>What is your inquiry about?</legend>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="NewsTips"
              />
              <Label check>News Tips</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="EventRelatedInquiries"
              />
              <Label check>Events Related Inquiries</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="Advertising_Sponsorships"
              />
              <Label check>Advertising & Sponsorships</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="ErrorReports"
              />
              <Label check>Error Reports</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="CareerHub"
              />
              <Label check>Career Hub</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="inquiry"
                type="radio"
                onChange={this.handleFormInput}
                value="Others"
              />
              <Label check>Others</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="inquiryOtherDetails">Details</Label>
            <Input
              id="inquiryOtherDetails"
              name="inquiryOtherDetails"
              type="textarea"
              rows="4"
              onChange={this.handleFormInput}
            />
          </FormGroup>
          <FormGroup check>
            <Input
              id="termcond"
              name="termcond"
              type="checkbox"
              onChange={this.handleFormInput}
            />
            <Label check for="termcond">
              I agree with the terms and conditions
            </Label>
          </FormGroup>
          <br />
          <Button>Send</Button>
        </Form>
      </div>
    );
  }
}

export default Contact;
