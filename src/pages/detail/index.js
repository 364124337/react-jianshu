import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreator } from './store'
import { withRouter } from 'react-router-dom'

class Detail extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
      this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
        dispatch(actionCreator.getDetail(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
