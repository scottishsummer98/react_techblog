import React, { Component } from "react";
import { Row, Col, FormGroup, Label, Button, Alert } from "reactstrap";
import { Form, Control, Errors, actions } from "react-redux-form";
import { connect } from "react-redux";
import { baseUrl } from "../../redux/baseURL";
import axios from "axios";

const mapDispatchToProps = (dispatch) => {
  return {
    resetContactForm: () => {
      dispatch(actions.reset("contactForm"));
    },
  };
};

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));
const isValidEmail = (val) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    val
  );

export class Contact extends Component {
  state = {
    alertShow: false,
    alertText: null,
    alertType: null,
  };
  handleFormSubmit = (values) => {
    axios
      .post(baseUrl + "contactForm", values)
      .then((res) => res.status)
      .then((status) => {
        if (status === 201) {
          this.setState({
            alertShow: true,
            alertText: "Your response has been recorded successfully!",
            alertType: "success",
          });
          setTimeout(() => {
            this.setState({
              alertShow: false,
            });
          }, 2000);
        }
      })
      .catch((err) => {
        this.setState({
          alertShow: true,
          alertText: err.message,
          alertType: "danger",
        });
        setTimeout(() => {
          this.setState({
            alertShow: false,
          });
        }, 2000);
      });

    this.props.resetContactForm();
  };
  render() {
    document.title = "Contact";
    return (
      <div>
        <Alert isOpen={this.state.alertShow} color={this.state.alertType}>
          {this.state.alertText}
        </Alert>
        <Form
          model="contactForm"
          onSubmit={(values) => this.handleFormSubmit(values)}
        >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="fullname">Name</Label>
                <Control.text
                  className="form-control"
                  model=".fullname"
                  placeholder="Enter Full Name"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".fullname"
                  show="touched"
                  messages={{ required: "Please fill up the required field" }}
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
                  validators={{
                    required,
                    isValidEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Please fill up the required field",
                    isValidEmail: "Please enter a valid email address",
                  }}
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
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".contactno"
                  show="touched"
                  messages={{
                    required: "Please fill up the required field",
                    isNumber: "Please enter a valid mobile number",
                  }}
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
              validators={{
                required,
              }}
            />
            <Errors
              className="text-danger"
              model=".address"
              show="touched"
              messages={{
                required: "Please fill up the required field",
              }}
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
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".city"
                  show="touched"
                  messages={{
                    required: "Please fill up the required field",
                  }}
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
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".zip"
                  show="touched"
                  messages={{
                    required: "Please fill up the required field",
                  }}
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
        </Form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Contact);
