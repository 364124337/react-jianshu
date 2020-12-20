import { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Writer extends PureComponent {
  render() {
    const { login } = this.props;
    if (login) {
      return <div>Writer</div>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.getIn(["login", "login"]),
  };
};

export default connect(mapStateToProps)(Writer);
