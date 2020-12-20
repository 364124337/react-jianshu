import React, { PureComponent } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreator } from "../store";
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    let { articleList, page } = this.props;
    let newList = articleList.toJS();
    return (
      <div>
        {newList.map((item, index) => {
          return (
            <Link key={index} to={"/detail/"+item.id}>
              <ListItem>
                <img className="pic" src={item.imgUrl} />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore
          onClick={() => {
            this.props.getMoreList(page);
          }}
        >
          加载更多
        </LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreator.getMoreList(page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
