import React, { Component, Fragment, PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreator } from "./store";

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
      window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img
              src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              className="banner-img"
            />
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {this.props.showScroll ? (
            <BackTop onClick={this.handleScrollTop.bind(this)}>顶部</BackTop>
          ) : (
            ""
          )}
        </HomeWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreator.getHomeInfo());
    },
    changeScrollTopShow(e) {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreator.toggleTopShow(true));
      } else {
        dispatch(actionCreator.toggleTopShow(false));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
