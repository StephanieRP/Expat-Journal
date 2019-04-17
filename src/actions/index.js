export {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  registerUser
} from "./register";

export { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, login } from "./login";

export {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  getPosts,
  NEW_POST_START,
  NEW_POST_SUCCESS,
  NEW_POST_FAILURE,
  newPost,
  GET_POST_ID_START,
  GET_POST_ID_SUCCESS,
  GET_POST_ID_FAILURE,
  getPostID,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  addComment
} from "./postsData";

export {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  getUser
} from "./users";
