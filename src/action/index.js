import { getPosts } from "./post";
import { getUserById } from "./users";

// cara melakukan pemanggilan action Creator di dalam action crator
export const getPostsWithUser = () => async (dispatch, getState) => {
  await dispatch(getPosts());
  const setPost = new Set(getState().listPosts.map((post) => post.userId));
  const idUsers = Array.from(setPost);

  idUsers.forEach((id) => dispatch(getUserById(id)));
};
