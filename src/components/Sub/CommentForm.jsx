import React, { Component } from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

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
    this.props.addComment(
      this.props.articleId,
      this.state.comment,
      this.state.user
    );
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
                  value={this.state.user}
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
                  value={this.state.comment}
                  onChange={this.handleFormInput}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit">Comment</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
