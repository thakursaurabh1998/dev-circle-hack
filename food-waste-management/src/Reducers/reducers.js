import { combineReducers } from "redux";
import {
  ADD_POST,
  ADD_COMMENT,
  REQ_CATEGORIES,
  UPVOTE_POST,
  DOWNVOTE_POST,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  EDIT_POST
} from "../Actions/actions";

const comment = (state = {}, action) => {
  const { comment } = action;
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      };
    case UPVOTE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          voteScore: state[comment.id].voteScore + 1
        }
      };
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          voteScore: state[comment.id].voteScore - 1
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          deleted: true
        }
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [comment.id]: {
          ...state[comment.id],
          body: comment.body
        }
      };
    default:
      return state;
  }
};

const post = (state = {}, action) => {
  const { post } = action;
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      };
    case UPVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: state[post.id].voteScore + 1
        }
      };
    case DOWNVOTE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          voteScore: state[post.id].voteScore - 1
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          deleted: true
        }
      };
    case EDIT_POST:
      return {
        ...state,
        [post.id]: {
          ...state[post.id],
          body: post.body,
          title: post.title
        }
      };
    default:
      return state;
  }
};

const categories = (state = {}, action) => {
  const { categories } = action;
  switch (action.type) {
    case REQ_CATEGORIES:
      return {
        ...state,
        categories
      };
    default:
      return state;
  }
};

export default combineReducers({
  post,
  comment,
  categories
});

// export default post;
