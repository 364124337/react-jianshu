import axios from "axios";
import { CHANGE_HOME_DATA, ADD_ARITICAL_LIST, TOGGLE_SCROLL_TOP } from "./actionTypes";

const changeHomeData = (data) => {
  return {
    type: CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
  };
};

const addHomeList = (list) => {
    return {
        type: ADD_ARITICAL_LIST,
        list
    }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      let data = res.data.data;
      const action = changeHomeData(data);
      dispatch(action);
    });
  };
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get("/api/homeList.json?page="+page).then((res) => {
            const data = res.data.data
            dispatch(addHomeList(data))
        })
    }
}

export const toggleTopShow = (show) => {
    return {
        type: TOGGLE_SCROLL_TOP,
        show
    }
}