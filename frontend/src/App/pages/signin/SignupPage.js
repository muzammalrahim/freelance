import React, { Component } from "react";
import Navbar from "../../../components/header/Navbar";
import SiSoHero from "../../../components/SiSoHero";
import "./signuppage.css";
import AvatarImage from "../../../../src/AvatarImage.png";
import loginimage from "../../../assets/LoginImage.png";
import Signinfooter from "./Signinfooter";
import { sign_up } from "../../../redux/auth/authCrud";
import { withRouter } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";
import AlertCompo from "./Alert";
import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

class SignupPage extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.alert={
      open: false, 
      severity: '',
      message:'',
      title:''
      }; 
  this.userValidate={
        username: false,
        email: false,
        password: false,
        passwordConfirm: false,
    };

this.user={
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  account_type: "",
};

this.userError={
  usernameError: "",
  emailError: "",
  passwordError: "",
  passwordConfirmError: "",
};

    this.state = {
       alert: this.alert,
       user:this.user,
       userValidate: this.userValidate,
       userError: this.userError, 
       statepasswordError :""
=======
    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };

    this.userValidate = {
      username: false,
      email: false,
      password: false,
      passwordConfirm: false,
    };

    this.user = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      
    };

    this.userError = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };

    this.state = {
      alert: this.alert,
      user: this.user,
      userValidate: this.userValidate,
      userError: this.userError,
>>>>>>> 278c7a640cdbb070f337bec054c272231eb41b17
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  validateEmail(email) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(email)) {
      return false;
    }
    return true;
  }

  signupChangeHandler = (e) => {
    let [key, value, { user, userValidate, userError }] = [
      e.target.name,
      e.target.value,
      this.state,
    ];
    user[key] = value;
    this.setState({
      user,
      userValidate,
      userError: {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
    });
  };

  checksubmitdata(isSubmit) {
    let [{ userValidate }] = [this.state];

    let impValue = 0;

    Object.values(userValidate).map((values) => {
      if (values === false) {
        impValue = impValue + 1;
      }
    });

    if (impValue > 0) {
      return false;
    } else if (impValue === 0) {
      return true;
    }
  }

  formSubmitHandler = () => {
    let {
      userValidate,
      user,
      user: { username, email, password, account_type, passwordConfirm },
      userError,
    } = this.state;

    let isSubmit = null;

<<<<<<< HEAD

Object.keys(userValidate).map((key) => {
 if (key === "password") {
          {
        
            password !== "" ? ( 
              password.length > 8 ? (
                (userValidate[key] = true)
              ) : (
                <div>
                  {console.log("length kaam ahy")}
                  {" "}
                  {(userValidate[key] = false)},
                  {this.setState({
                  statepasswordError : "minimum Password length 8 characters", 
                  })}
                </div>
              )
            ) : (this.setState({
                  statepasswordError : "password required", 
                  })
            );
          }
        } else if (key === "email") {
          email !== "" ? (
            this.validateEmail(email) ? (
              (userValidate[key] = true)
=======
    Object.keys(userValidate).map((key) => {
      if (
        key === "password" ||
        key === "username" ||
        key === "passwordConfirm"
      ) {
        {
          user[key] !== "" ? (
            user[key].length > 7 ? (
              <div>
                {key === "passwordConfirm" ? (
                  <div>
                    {user[key] === user["password"]
                      ? (userValidate[key] = true)
                      : (userError[key] =
                          "password and confirm password are not match")}
                  </div>
                ) : (
                  (userValidate[key] = true)
                )}
              </div>
>>>>>>> 278c7a640cdbb070f337bec054c272231eb41b17
            ) : (
              <div>
                {" "}
                {(userValidate[key] = false)},
                {(userError[key] = "minimum Password length 8 characters")}
              </div>
            )
          ) : (
            (userError[key] = "Password is required")
          );
        }
      } else if (key === "email") {
        user[key] !== "" ? (
          this.validateEmail(email) ? (
            (userValidate[key] = true)
          ) : (
            <div>
              {" "}
              {(userValidate[key] = false)},
              {(userError[key] = "email pattren not valid")}
            </div>
          )
        ) : (
          (userError[key] = "email are required")
        );
      }
    });

    this.setState({ userError });

<<<<<<< HEAD
    isSubmit = Boolean(this.checksubmitdata(isSubmit) ? false : false);
    
    if(isSubmit===true)  
      {
         
=======
    isSubmit = Boolean(this.checksubmitdata(isSubmit) ? true : false);
>>>>>>> 278c7a640cdbb070f337bec054c272231eb41b17

    if (isSubmit === true) {

        let  CustomRegisterUser={
          username : username ,
          first_name: "first name",
          last_name: "last name",
          account_type: "hire",
          email:email,
          password:password,
          password_confirm:passwordConfirm



<<<<<<< HEAD



 this.setState({userError:{usernameError:"", emailError:"success", passwordError:"success",passwordConfirmError:'User Created Sucessfully'}})
this.setState({userValidate,})

     console.log("state",this.state)   
=======
          }
        sign_up(CustomRegisterUser)
          .then((res) => {
            this.setState({
              alert: {
                open: true,
                severity: "success",
                title: "success",
                message: "User Created Sucessfully",
              },
            });
            setTimeout(() => {
              this.props.history.push("/login");
            }, 3000);
          })
          .catch((error) => {
            this.setState({
              alert: {
                open: true,
                severity: "error",
                title: "Error",
                //  message:`${key+": "+error.response.data[key][0]}`
                message: "User not Created ",
              },
            });
          });
      
    } else {
      this.setState({
        alert: {
          open: true,
          severity: "error",
          title: "Error",
          message: "please! fill your form completely",
        },
      });
    }
>>>>>>> 278c7a640cdbb070f337bec054c272231eb41b17
  };

  render() {
    let {
      user: { username, email, password, passwordConfirm },
      alert: { open, severity, message, title },
      userError,
    } = this.state;

    return (
      <div className="signUpPage SignIn-flex-container">
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
<<<<<<< HEAD
                    <div className="form-group pt-4">
                      <label form="usr">Full name </label>
=======
                    <div
                      className={
                        userError.username === ""
                          ? "form-group pt-4"
                          : "form-group pt-4 error "
                      }
                    >
                      <label form="usr">Full name</label>
>>>>>>> 278c7a640cdbb070f337bec054c272231eb41b17
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={username}
                        name="username"
                        onChange={this.signupChangeHandler}
                      />

                      {userError.username !== "" ? (
                        <div className="error-message">
                          {userError.username}
                        </div>
                      ) : null}
                    </div>

                    <div
                      className={
                        userError.email === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      <label form="email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        name="email"
                        onChange={this.signupChangeHandler}
                      />
                      {userError.email !== "" ? (
                        <div className="error-message">{userError.email}</div>
                      ) : null}
                    </div>

                    <div
                      className={
                        userError.password === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      <label form="pwd">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={password}
                        name="password"
                        onChange={this.signupChangeHandler}
                      />

                      {userError.password !== "" ? (
                        <div className="error-message">
                          {userError.password}
                        </div>
                      ) : null}
                    </div>
                    <div
                      className={
                        userError.passwordConfirm === ""
                          ? "form-group"
                          : "form-group error"
                      }
                    >
                      <label form="passwordConfirm">confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter confirm Password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        pattern=".{8,}"
                        onChange={this.signupChangeHandler}
                      />
                      {userError.passwordConfirm !== "" ? (
                        <div className="error-message">
                          {userError.passwordConfirm}
                        </div>
                      ) : null}
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

        <AlertCompo />
        <Signinfooter />
      </div>
    );
  }
}

export default withRouter(SignupPage);
