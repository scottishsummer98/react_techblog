import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import dateFormat from "dateformat";

const ArticleShort = (props) => {
  return (
    <Card color="dark" inverse style={{ cursor: "pointer" }}>
      <CardImg
        alt="Card image cap"
        src={props.article.urlToImage}
        style={{
          height: 270,
          width: "35rem",
        }}
      />
      <CardImgOverlay>
        <div className="ArticleShort_ImageOverlay">
          <CardTitle tag="h5">{props.article.title}</CardTitle>
          <CardText>
            <small>
              {dateFormat(
                props.article.publishedAt,
                "dddd, mmmm dS, yyyy, h:MM:ss TT"
              )}
            </small>
          </CardText>
        </div>
      </CardImgOverlay>
    </Card>
  );
};

export default ArticleShort;
