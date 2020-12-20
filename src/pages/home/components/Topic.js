import React, { PureComponent } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.topicList.map((item, index) => {
          return (
            <TopicItem key={item.get("id")}>
              <img src={item.get("imgUrl")} className="topic-pic" />
              {item.get("title")}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(["home", "topicList"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
