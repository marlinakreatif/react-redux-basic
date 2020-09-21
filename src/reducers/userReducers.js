import { GET_USER_BY_ID } from "../constants/types";

export const getUserByIdReducer = (users = [], action) => {
  switch (action.type) {
    case GET_USER_BY_ID:
      return [...users, action.payload];

    default:
      return users;
  }
};
