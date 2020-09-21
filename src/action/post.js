import API from "../axios/api";
import { GET_POSTS_DATA } from "../constants/types";

export const getPosts = () => {
  return async (dispatch) => {
    const data = await API.get("/posts");
    dispatch({
      type: GET_POSTS_DATA,
      payload: data,
    });
  };
};
