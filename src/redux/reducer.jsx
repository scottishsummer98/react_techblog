import techArticlesApi from "../api/TechApi";
import techArticlesCommentsApi from "../api/TechCommentsApi";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const techArticlesReducer = (techArticlesState = techArticlesApi, action) => {
  switch (action.type) {
    default:
      return techArticlesState;
  }
};

const techArticlesCommentsReducer = (
  techArticleCommentsState = techArticlesCommentsApi,
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      comment.id = techArticleCommentsState.length;
      comment.date = new Date().toString();
      return techArticleCommentsState.concat(comment);
    default:
      return techArticleCommentsState;
  }
};

export const Reducer = combineReducers({
  techArticles: techArticlesReducer,
  techArticlesComments: techArticlesCommentsReducer,
});
