import { combineReducers } from "redux";
import { choosenProductReducer, listProductReducer } from "./productReducer";
import { listPostsReducer, getPostById } from "./postReducers";
import { getUserByIdReducer } from "./userReducers";

export default combineReducers({
  listProduct: listProductReducer,
  choosenProduct: choosenProductReducer,
  listPosts: listPostsReducer,
  users: getUserByIdReducer,
  post: getPostById,
});
