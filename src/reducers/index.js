import { combineReducers } from "redux";
import { choosenProductReducer, listProductReducer } from "./productReducer";
import { listPostsReducer } from "./postReducers";

export default combineReducers({
  listProduct: listProductReducer,
  choosenProduct: choosenProductReducer,
  listPosts: listPostsReducer,
});
