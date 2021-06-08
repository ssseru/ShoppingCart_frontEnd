import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userAdd } from "./actions/cartActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // if (nextProps.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard"); // push user to dashboard when they login
    // }
    // if (nextProps.errors) {
    //   this.setState({
    //     errors: nextProps.errors,
    //   });
    // }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      email: this.state.email,
    };
    console.log(user)
    this.props.userAdd(user); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    this.props.history.push({
      pathname: "/home",
    });
  };
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b>
              </h4>
              <p>
                the user is hardcoded here so entering details here will show an
                error in cart page
              </p>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="email">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  userAdd: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userAdd: (user) => {
      dispatch(userAdd(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
