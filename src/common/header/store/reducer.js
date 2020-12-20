import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  PAGE_CHANGE,
} from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === SEARCH_BLUR) {
    return state.set("focused", false);
  }

  if (action.type === CHANGE_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage,
    });
  }

  if (action.type === MOUSE_ENTER) {
    return state.set("mouseIn", true);
  }

  if (action.type === MOUSE_LEAVE) {
    return state.set("mouseIn", false);
  }

  if (action.type === PAGE_CHANGE) {
    return state.set("page", action.page);
  }
  return state;
};
