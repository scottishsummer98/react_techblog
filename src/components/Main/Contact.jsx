import React, { Component } from "react";
import { Row, Col, FormGroup, Label, Button } from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";
export class Contact extends Component {
  handleFormSubmit = (values) => {
    console.log(values);
  };
  render() {
    document.title = "Contact";
    return (
      <div>
        <LocalForm onSubmit={(values) => this.handleFormSubmit(values)}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="fullname">Name</Label>
                <Control.text
                  className="form-control"
                  model=".fullname"
                  placeholder="Enter Full Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Control.text
                  className="form-control"
                  model=".email"
                  placeholder="Enter Email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="contactno">Contact No.</Label>
                <Control.text
                  className="form-control"
                  model=".contactno"
                  placeholder="Enter Contact No."
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="sex">Sex</Label>
                <Control.select className="form-control" model=".sex">
                  <option defaultChecked>Select sex</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Control.select>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Control.textarea
              className="form-control"
              model=".address"
              placeholder="Enter Address"
              rows="2"
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Control.text
                  className="form-control"
                  model=".city"
                  placeholder="Enter City"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Control.text
                  className="form-control"
                  model=".zip"
                  placeholder="Enter Zip"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup tag="fieldset">
            <legend>What is your inquiry about?</legend>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="NewsTips"
              />
              <Label check>News Tips</Label>
            </FormGroup>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="EventRelatedInquiries"
              />
              <Label check>Events Related Inquiries</Label>
            </FormGroup>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="Advertising_Sponsorships"
              />
              <Label check>Advertising & Sponsorships</Label>
            </FormGroup>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="ErrorReports"
              />
              <Label check>Error Reports</Label>
            </FormGroup>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="CareerHub"
              />
              <Label check>Career Hub</Label>
            </FormGroup>
            <FormGroup check>
              <Control.radio
                className="form-check-input"
                model=".inquiry"
                value="Others"
              />
              <Label check>Others</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="inquiryOtherDetails">Details</Label>
            <Control.textarea
              className="form-control"
              model=".inquiryOtherDetails"
              rows="4"
            />
          </FormGroup>
          <FormGroup check>
            <Control.checkbox className="form-check-input" model=".termcond" />
            <Label check for="termcond">
              I agree with the terms and conditions
            </Label>
          </FormGroup>
          <br />
          <Button>Send</Button>
        </LocalForm>
      </div>
    );
  }
}

export default Contact;
