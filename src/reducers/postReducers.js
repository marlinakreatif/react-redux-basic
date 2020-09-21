import { GET_POSTS_DATA, GET_POST_BY_ID } from "../constants/types";

export const listPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const getPostById = (state = null, action) => {
  switch (action.type) {
    case GET_POST_BY_ID:
      return action.payload;
    default:
      return state;
  }
};
