import API from "../axios/api";
import { GET_POSTS_DATA, GET_POST_BY_ID } from "../constants/types";

export const getPosts = () => async (dispatch) => {
  const apiResult = await API.get("/posts");
  dispatch({
    type: GET_POSTS_DATA,
    payload: apiResult.data,
  });
};

export const getPostById = (id) => async (dispatch) => {
  const post = API.get(`/posts/${id}`);
  post.then((res) =>
    dispatch({
      type: GET_POST_BY_ID,
      payload: res.data,
    })
  );
};
