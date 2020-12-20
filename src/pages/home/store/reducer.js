import { fromJS } from "immutable";
import { CHANGE_HOME_DATA, ADD_ARITICAL_LIST, TOGGLE_SCROLL_TOP } from "./actionTypes";

const defaultState = fromJS({
  articlePage: 1,

  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl: "",
    },
  ],

  articleList: [
    {
      id: 1,
      title: "社会热点",
      desc: "123",
      imgUrl: "",
    },
  ],

  recommendList: [
    {
      id: 1,
      imgUrl: "test",
    },
  ],

  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case ADD_ARITICAL_LIST:
      return state.set(
        "articleList",
        state.get("articleList").concat(fromJS(action.list))
      );
    case TOGGLE_SCROLL_TOP:
        return state.set('showScroll', action.show)
    default:
      return state;
  }
};
