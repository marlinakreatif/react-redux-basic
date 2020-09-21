import API from "../axios/api";
import { GET_POSTS_DATA } from "../constants/types";

export const getPosts = () => async (dispatch) => {
  const apiResult = await API.get("/posts");
  dispatch({
    type: GET_POSTS_DATA,
    payload: apiResult.data,
  });
};
