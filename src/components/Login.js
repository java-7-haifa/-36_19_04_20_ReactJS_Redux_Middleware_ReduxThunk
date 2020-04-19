import React from "react";
import Loading from "./Loading";
import { connect } from "react-redux";
import {
  loginAction,
  registrationAction,
} from "../redux/actions/login-page.action";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e)=>{
    e.preventDefault();
    this.setState({...this.state, email:e.target.value});
  }

  changePassword = (e) => {
    e.preventDefault();
    this.setState({...this.state,password: e.target.value});
  }

  render() {
    return (
      <>
        {this.props.pending ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            <form action="#" className="col-6 mt-5">
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Type email"
                value={this.state.email}
                onChange={e => this.changeEmail(e)}
              />
              <input
                className="form-control mb-2"
                type="password"
                placeholder="Type password"
                value={this.state.password}
                onChange={e => this.changePassword(e)}
              />
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.registration(this.state.email,this.state.password);
                }}
              >
                Registration
              </button>
              <button
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.login(this.state.email,this.state.password);
                }}
              >
                Login
              </button>
              {this.props.error ? (
                <div className="alert alert-danger mt-4" role="alert">
                  {this.props.error}
                </div>
              ) : null}
            </form>
          </div>
        )}
      </>
    );
  }
}

const mapSateToProps = ({ loginPage }) => {
  return {
    pending: loginPage.pending,
    error: loginPage.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    registration: (email, password) =>
      dispatch(registrationAction(email, password)),
  };
};
export default connect(mapSateToProps, mapDispatchToProps)(Login);
