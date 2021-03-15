import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import "./SignIn.css";
import "./signuppage.css";
import SiSoHero from "../../../components/SiSoHero";
import loginimage from "../../../assets/LoginImage.png";
import AvatarImage from "../../../../src/AvatarImage.png";
import LOCKER from "../../../assets/LOCKER.png";
import AlertCompo from "./Alert";
import Signinfooter from "./Signinfooter";

import { login } from "../../../redux/auth/authCrud";
import { withRouter } from "react-router-dom";

import LinkedInPage from "./LinkedInPage";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.userValidation = {
      email: false,
      password: false,
    };

    this.state = {
      alert: this.alert,
      userValidation: this.userValidation,
      email: "",
      password: "",
      code: "",
      errorMessage: "",
      passworderror: "",
      emailerror: "",
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      passworderror: "",
      emailerror:"",
    });
  };

  validateEmail(email){
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
            return false
        }
        return true
}

  login = () => {
    let { password,email, userValidation } = this.state;
    let isSubmit = null;

    Object.keys(userValidation).map((key) => {
      if (key === "password") {
        {
          password !== "" ? (
            password.length > 8 ? (
              (userValidation[key] = true)
            ) : (
              <div>
                {" "}
                {(userValidation[key] = false)},
                {this.setState({
                  passworderror: "minimum Password length 8 characters",
                })}
              </div>
            )
          ) : (
            this.setState({
              passworderror: "Password is required",
            })
          );
        }
      
      } else if (key === "email") {

        email !== "" ? (
          this.validateEmail(email) ? (
            (userValidation[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidation[key] = false)},
              {this.setState({
                emailerror: "email pattren not valid",
              })}
            </div>
          )
        ) : (
          this.setState({
            emailerror: "email is required",
          })
        );

      }
    });

  
 if(userValidation.email === true && userValidation. password === true)
 {
  isSubmit = true
 }
 else{
  isSubmit = false
 }

    isSubmit &&
      login(this.state.email, this.state.password)
        .then(({ data: { token } }) => {
          localStorage.setItem("token", token);
          this.setState({
            alert: {
              open: true,
              severity: "success",
              title: "success",
              message: "you are successfully logged in",
            },
          });
          if (localStorage.getItem("token")) {
            setTimeout(() => {
              this.props.history.push("/");
            }, 3000);
          }
        })
        .catch(() => {
          this.setState({
            alert: {
              open: true,
              severity: "error",
              title: "Error",
              //  message:`${key+": "+error.response.data[key][0]}`
              message: "your full name or password invalid",
            },
          });
        });
  };

  render() {
    let {
      passworderror,
      emailerror,
      alert: { open, severity, message, title },
    } = this.state;

    return (
      <div className="SignUp-flex-container">
        <Snackbar
          open={open}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => {
            this.handleClose();
          }}
        >
          <Alert
            onClose={() => {
              this.handleClose();
            }}
            severity={severity}
          >
            <AlertTitle>{title}</AlertTitle>
            <strong>{message}</strong>
          </Alert>
        </Snackbar>
        <div className="si-container">
          <Navbar text="New Member?" value="Signup" />
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
                    <div 
                    className={
                      emailerror === ""
                        ? "form-group pt-4"
                        : "form-group pt-4 error"
                    }
                    >
                      <label form="usr">Full name </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usr"
                        placeholder="Enter Full Name"
                        name="email"
                        onChange={this.onChangeHandler}
                      />
                      {emailerror !== "" ? (
                        <div className="error-message">{emailerror}</div>
                      ) : null}
                    </div>

                    <div
                      className={
                        passworderror === ""
                          ? "s-in-form-group"
                          : "s-in-form-group error"
                      }
                    >
                      <label form="pwd">Password </label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter Password"
                        name="password"
                        onChange={this.onChangeHandler}
                      />

                      {passworderror !== "" ? (
                        <div className="error-message">{passworderror}</div>
                      ) : null}
                    </div>
                  </form>
                </div>
                <div className="sign-up-btn  pl-3 pr-3 pb-3">
                  <div className="float-right">
                    <img src={LOCKER} alt="" className="pr-1" />

                    <a href="/" data-target="#pwdModal" data-toggle="modal">
                      Forgot your password?{" "}
                    </a>
                  </div>
                  <div className="checkbox pt-3">
                    <label>
                      <input type="checkbox" value="" /> Remember me
                    </label>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      className="btn btn-default btn-block text-white"
                      onClick={this.login}
                    >
                      Log In
                    </button>
                  </div>
                  <div>
                    <h6 className="text-center pt-2">or</h6>
                  </div>
                  <div className="pt-1 pb-4">
                    <div className="lin-btn">
                      <LinkedInPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AlertCompo />
        <Signinfooter />
      </div>
    );
  }
}
export default withRouter(SignIn);
