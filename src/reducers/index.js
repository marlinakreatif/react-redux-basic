import { combineReducers } from "redux";
import { choosenProductReducer, listProductReducer } from "./productReducer";
import { listPostsReducer } from "./postReducers";
import { getUserByIdReducer } from "./userReducers";

export default combineReducers({
  listProduct: listProductReducer,
  choosenProduct: choosenProductReducer,
  listPosts: listPostsReducer,
  users: getUserByIdReducer,
});
