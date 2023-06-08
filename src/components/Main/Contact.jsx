import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

export class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    document.title = "Contact";
    return (
      <div>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter Full Name"
                  type="text"
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
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="sex">Sex</Label>
                <Input id="sex" name="sex" type="select">
                  <option selected disabled>
                    Select sex
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input id="address" name="address" placeholder="Enter Address" />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input id="city" name="city" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input id="zip" name="zip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup tag="fieldset">
            <legend>What is your inquiry about?</legend>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
              <Label check>News Tips</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
              <Label check>Events Related Inquiries</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
              <Label check>Advertising & Sponsorships</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
              <Label check>Error Reports</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
              <Label check>Career Hub</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="inquiry" type="radio" />
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
            />
          </FormGroup>
          <FormGroup check>
            <Input id="termcond" name="termcond" type="checkbox" />
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
