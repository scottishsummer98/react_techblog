import * as actionTypes from "./actionTypes";

export const addComment = (articleId, comment, user) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    articleId: articleId,
    comment: comment,
    user: user,
  },
});
