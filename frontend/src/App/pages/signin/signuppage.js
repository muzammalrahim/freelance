import React, { Component } from "react";
import Navbar from "../../../components/header/Navbar";
import SiSoHero from "../../../components/SiSoHero";
import "./SignIn.css";
import AvatarImage from "../../../../src/AvatarImage.png";
import loginimage from "../../../assets/LoginImage.png";
import Alert from "../../../App/pages/signin/Alert";
import Signinfooter from "./Signinfooter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { sign_up } from "../../../redux/auth/authCrud";
import { withRouter } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      account_type: "work",
    };
  }

  signupHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmitHandler = () => {
    let {
      username,
      email,
      password,
      account_type,
      passwordConfirm,
    } = this.state;

    sign_up(username, email, password, account_type, passwordConfirm)
      .then((res) => {
        setTimeout(() => {
          this.props.history.push("/login");
        }, 3000);
      })
      .catch((error) => {});
  };

  render() {
    let { username, email, password, passwordConfirm } = this.state;
    return (
      <div className="SignIn-flex-container">
        <div className="si-container">
          <Navbar text="Already A Member?" value="LogIn" className="pl-5" />
        </div>
        <div>
          <SiSoHero />
        </div>

        <div className="main-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center bg-white offset-md-3">
                <div className="text-content">
                  <div className="welcome-text pt-3 pl-3 float-left ">
                    <h5 className="text-light">Welcome!</h5>
                    <h6 className="text-light">Sign up to continue</h6>
                  </div>

                  <div className="float-right">
                    <img src={loginimage} alt="/" />
                  </div>
                </div>

                <div className="floww pl-3 pr-3">
                  <img src={AvatarImage} alt="/" className="si-pic-tag" />
                  <form className="form-field pt-5">
                    <div className="form-group pt-4">
                      <label form="usr">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={username}
                        name="username"
                        onChange={this.signupHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label form="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        name="email"
                        onChange={this.signupHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label form="pwd">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        name="password"
                        onChange={this.signupHandler}
                      />
                    </div>
                    <div className="form-group">
                      <label form="passwordConfirm">confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter confirm Password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.signupHandler}
                      />
                    </div>
                  </form>
                </div>

                <div className="sign-up-btn  pl-3 pr-3 pb-3">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" /> I agree to the
                      Freelancer User
                      <span className="checkbox-text"> Agreement</span> and
                      <span className="checkbox-text">Privacy Policy. </span>
                    </label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      className="btn btn-default btn-block"
                      onClick={this.formSubmitHandler}
                    >
                      sign up
                    </button>
                  </div>
                  <div>
                    <h6 className="text-center pt-2">or</h6>
                  </div>
                  <div className="pt-1 pb-4">
                    <LinkedInPage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Alert />
        <Signinfooter />
      </div>
    );
  }
}

export default withRouter(SignupPage);
