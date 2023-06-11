import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const TechArticleDetailed = (props) => {
  const comments = props.selectedTechArticleComments.filter(
    (comment) => comment.articleId === props.selectedTechArticle.id
  );
  return (
    <Card
      body
      color="dark"
      inverse
      style={{
        width: "43rem",
      }}
    >
      <img
        style={{
          width: "41rem",
          height: "25rem",
        }}
        alt="Sample"
        src={props.selectedTechArticle.urlToImage}
      />

      <CardBody>
        <CardTitle tag="h5">{props.selectedTechArticle.title}</CardTitle>
        <hr />
        <CardSubtitle>{props.selectedTechArticle.description}</CardSubtitle>
        <CardText style={{ textAlign: "justify" }}>
          {props.selectedTechArticle.content}
        </CardText>
      </CardBody>
      <hr />
      <CardBody>
        <CommentList comments={comments} />
        <CommentForm articleId={props.selectedTechArticle.id} />
      </CardBody>
    </Card>
  );
};

export default TechArticleDetailed;
