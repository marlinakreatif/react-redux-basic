import API from "../axios/api";
import { GET_USER_BY_ID } from "../constants/types";

export const getUserById = (userId) => async (dispatch) => {
  const user = await API.get(`/users/${userId}`);

  dispatch({
    type: GET_USER_BY_ID,
    payload: user.data,
  });
};
