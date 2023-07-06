import * as actionTypes from "./actionTypes";
import axios from "axios";
import { baseUrl } from "./baseURL";

export const addComment = (articleId, comment, user) => (dispatch) => {
  const newComment = {
    articleId: articleId,
    comment: comment,
    user: user,
  };
  newComment.date = new Date().toISOString();

  axios
    .post(baseUrl + "techArticlesComments", newComment)
    .then((res) => res.data)
    .then((comment) => dispatch(commentConcat(comment)));
};

export const commentConcat = (comment) => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment,
});

export const loadTechArticles = (techArticles) => ({
  type: actionTypes.LOAD_TECHARTICLES,
  payload: techArticles,
});

export const techArticlesLoading = () => ({
  type: actionTypes.TECHARTICLES_LOADING,
});

export const dishesFailed = (errmsg) => ({
  type: actionTypes.TECHARTICLES_FAILED,
  payload: errmsg,
});

export const fetchTechArticles = () => {
  return (dispatch) => {
    dispatch(techArticlesLoading());

    axios
      .get(baseUrl + "techArticles")
      .then((res) => res.data)
      .then((techArticles) => dispatch(loadTechArticles(techArticles)))
      .catch((error) => dispatch(dishesFailed(error.message)));
  };
};

export const loadTechArticlesComments = (techArticlesComments) => ({
  type: actionTypes.LOAD_TECHARTICLES_COMMENTS,
  payload: techArticlesComments,
});

export const techArticlesCommentsLoading = () => ({
  type: actionTypes.TECHARTICLES_COMMENTS_LOADING,
});

export const fetchTechArticlesCommnets = () => {
  return (dispatch) => {
    dispatch(techArticlesCommentsLoading());

    axios
      .get(baseUrl + "techArticlesComments")
      .then((res) => res.data)
      .then((techArticlesComments) =>
        dispatch(loadTechArticlesComments(techArticlesComments))
      );
  };
};
