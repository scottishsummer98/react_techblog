import React from "react";
import dateFormat from "dateformat";
import { CardText } from "reactstrap";

const CommentList = (props) => {
  const comments = props.comments.map((comment) => {
    return (
      <div className="commentsList_container" key={comment.id}>
        <div className="commenteesinfo">
          <img
            className="commentList_avatarimage"
            src={`https://i.pravatar.cc/150?img=${Math.floor(
              Math.random() * 50 + 1
            )}`}
            alt="Avatars"
          />
          <span className="commentList_user">{comment.user}</span>
          <span className="commentList_date">
            {dateFormat(comment.date, "dd/mm/yyyy, h:MM TT")}
          </span>
        </div>
        <CardText style={{ textAlign: "justify" }}>{comment.comment}</CardText>
      </div>
    );
  });
  return <div>{comments}</div>;
};

export default CommentList;
