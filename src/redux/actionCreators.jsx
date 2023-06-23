import * as actionTypes from "./actionTypes";
import techArticles from "../api/TechApi";

export const addComment = (articleId, comment, user) => ({
  type: actionTypes.ADD_COMMENT,
  payload: {
    articleId: articleId,
    comment: comment,
    user: user,
  },
});

export const loadTechArticles = (techArticles) => ({
  type: actionTypes.LOAD_TECHARTICLES,
  payload: techArticles,
});

export const techArticlesLoading = () => ({
  type: actionTypes.TECHARTICLES_LOADING,
});

export const fetchTechArticles = () => {
  return (dispatch) => {
    dispatch(techArticlesLoading());

    setTimeout(() => {
      dispatch(loadTechArticles(techArticles));
    }, 1000);
  };
};
