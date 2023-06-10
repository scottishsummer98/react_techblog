import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import dateFormat from "dateformat";

const TechArticleShort = (props) => {
  return (
    <Card color="dark" inverse style={{ cursor: "pointer" }}>
      <CardImg
        alt="Card image cap"
        src={props.techArticle.urlToImage}
        style={{
          height: 270,
          width: "35rem",
        }}
      />
      <CardImgOverlay>
        <div className="techArticleShort_ImageOverlay">
          <CardTitle tag="h5">{props.techArticle.title}</CardTitle>
          <CardText>
            <small>
              {dateFormat(
                props.techArticle.publishedAt,
                "dddd, mmmm dS, yyyy, h:MM:ss TT"
              )}
            </small>
          </CardText>
        </div>
      </CardImgOverlay>
    </Card>
  );
};

export default TechArticleShort;
