import techArticlesApi from "../api/TechApi";
import techArticlesCommentsApi from "../api/TechCommentsApi";

const initialState = {
  techArticles: techArticlesApi,
  techArticlesComments: techArticlesCommentsApi,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_COMMENT") {
    let comment = action.payload;
    comment.id = state.techArticlesComments.length;
    comment.date = new Date().toDateString();
    console.log(comment);
    return {
      ...state,
      techArticlesComments: state.techArticlesComments.concat(comment),
    };
  }
  return state;
};
