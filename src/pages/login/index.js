import React, { PureComponent } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props;
    if (loginState) {
        return <Redirect to="/"></Redirect>
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={(input) => {
                this.account = input;
              }}
            ></Input>
            <Input
              type="password"
              placeholder="密码"
              ref={(input) => {
                this.password = input;
              }}
            ></Input>
            <Button
              onClick={() => {
                this.props.login(this.account, this.password);
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(["login", "login"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(account, password) {
      dispatch(actionCreator.login(account.value, password.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
