import techArticles from "../api/TechApi";
import techArticlesComments from "../api/TechCommentsApi";

const initialState = {
  techArticles: techArticles,
  techArticlesComments: techArticlesComments,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
