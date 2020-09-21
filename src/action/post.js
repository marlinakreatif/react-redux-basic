import API from "../axios/api";
import { GET_POSTS_DATA } from "../constants/types";

export const getPosts = async () => {
  const data = await (await API.get("/posts"));

  return {
    type: GET_POSTS_DATA,
    payload: data,
  };
};
