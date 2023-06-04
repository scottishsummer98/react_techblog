import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const ArticleDetailed = (props) => {
  return (
    <Card
      body
      color="dark"
      inverse
      style={{
        height: 700,
        width: "43rem",
      }}
    >
      <img
        style={{
          width: "41rem",
          height: "25rem",
        }}
        alt="Sample"
        src={props.selectedArticle.urlToImage}
      />

      <CardBody>
        <CardTitle tag="h5">{props.selectedArticle.title}</CardTitle>
        <hr />
        <CardSubtitle>{props.selectedArticle.description}</CardSubtitle>
        <CardText>{props.selectedArticle.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default ArticleDetailed;
