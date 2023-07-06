import { InitialContactForm } from "../forms/contactForms";
import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const techArticlesReducer = (
  techArticlesState = { isLoading: false, techArticles: [], errmsg: null },
  action
) => {
  switch (action.type) {
    case actionTypes.TECHARTICLES_LOADING:
      return {
        ...techArticlesState,
        isLoading: true,
        techArticles: [],
        errmsg: null,
      };
    case actionTypes.LOAD_TECHARTICLES:
      return {
        ...techArticlesState,
        isLoading: false,
        techArticles: action.payload,
        errmsg: null,
      };
    case actionTypes.TECHARTICLES_FAILED:
      return {
        ...techArticlesState,
        isLoading: false,
        techArticles: [],
        errmsg: action.payload,
      };
    default:
      return techArticlesState;
  }
};

const techArticlesCommentsReducer = (
  techArticlesCommentsState = { isLoading: false, techArticlesComments: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.TECHARTICLES_COMMENTS_LOADING:
      return {
        ...techArticlesCommentsState,
        isLoading: true,
        techArticlesComments: [],
      };
    case actionTypes.LOAD_TECHARTICLES_COMMENTS:
      return {
        ...techArticlesCommentsState,
        isLoading: false,
        techArticlesComments: action.payload,
      };

    case actionTypes.ADD_COMMENT:
      let comment = action.payload;
      return {
        ...techArticlesCommentsState,
        techArticlesComments:
          techArticlesCommentsState.techArticlesComments.concat(comment),
      };
    default:
      return techArticlesCommentsState;
  }
};

export const Reducer = combineReducers({
  techArticles: techArticlesReducer,
  techArticlesComments: techArticlesCommentsReducer,
  ...createForms({
    contactForm: InitialContactForm,
  }),
});
