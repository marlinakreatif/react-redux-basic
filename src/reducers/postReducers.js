import { GET_POSTS_DATA } from "../constants/types";

export const listPostsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS_DATA:
      return action.payload;
    default:
      return state;
  }
};
