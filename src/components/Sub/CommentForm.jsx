import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      user: "",
    };
    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    this.props.dispatch({
      type: "ADD_COMMENT",
      payload: {
        articleId: this.props.articleId,
        comment: this.state.comment,
        user: this.state.user,
      },
    });
    this.setState({
      comment: "",
      user: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="user">Name</Label>
                <Input
                  id="user"
                  name="user"
                  placeholder="User Name"
                  type="text"
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="comment">Comment</Label>
                <Input
                  id="comment"
                  name="comment"
                  placeholder="Enter Comment"
                  type="text"
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Comment</Button>
        </Form>
      </div>
    );
  }
}

export default connect()(CommentForm);
