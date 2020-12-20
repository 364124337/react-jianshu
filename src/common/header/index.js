import React from "react";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style.js";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Link } from "react-router-dom";
import { actionCreator as loginActionCreator } from '../../pages/login/store'

class Header extends React.Component {
  getListArea() {
    let { page, list, totalPage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                this.props.handlePageChange(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {this.props.login ? (
            <NavItem onClick={this.props.logout} className="right">退出</NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={() => {
                  this.props.handleInputFocus(this.props.list);
                }}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                this.props.focused ? "focused iconfont zoom" : "iconfont zoom"
              }
            >
              &#xe614;
            </i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to="/writer">
              <Button className="writting">
                <i className="iconfont">&#xe615;</i>
                写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused'),
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size <= 0) {
        dispatch(actionCreator.getList());
      }
      dispatch(actionCreator.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },

    handlePageChange(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreator.pageChange(page + 1));
      } else {
        dispatch(actionCreator.pageChange(1));
      }
    },

    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },

    logout() {
      dispatch(loginActionCreator.logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
