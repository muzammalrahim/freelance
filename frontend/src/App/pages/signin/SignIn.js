import React, { Component } from "react";
import Navbar from "../../../components/Navbar";
import "./SignIn.css";
import "./signuppage.css";
import SiSoHero from "../../../components/SiSoHero";
import loginimage from "../../../assets/LoginImage.png";
import AvatarImage from "../../../../src/AvatarImage.png";
import LOCKER from "../../../assets/LOCKER.png";
import Alert from "../../../App/pages/signin/Alert";
import Signinfooter from "./Signinfooter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { login ,Linkedinlogin } from "../../../redux/auth/authCrud";
import { withRouter } from "react-router-dom";

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      code: '',
      errorMessage: '',
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  handleSuccess = (data) => {



    this.setState({
      code: data.code,
      errorMessage: '',
    });
  }

  handleFailure = (error) => {
    this.setState({
      code: '',
      errorMessage: error.errorMessage,
    });
  }
  
  login = () => {
    login(this.state.email, this.state.password)
      .then(({ data: { token } }) => {
        localStorage.setItem("token", token);

        if (localStorage.getItem("token")) {
          this.props.history.push("/");
        }
      })
      .catch(() => {
        // disableLoading();
      });
  };

  
  LinkedinLoginHandler = () => {
    Linkedinlogin()
      .then((response) => {

        console.log("linkedin reponse",response)

      })
      .catch(() => {
        // disableLoading();
      });
  };

  render() {
    const { code, errorMessage } = this.state;

    console.log("code ka bacha",this.state.code)
    return (
      <div className="SignUp-flex-container">
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
                    <div className="form-group pt-4">
                      <label form="usr">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="usr"
                        placeholder="Enter Full Name"
                        name="email"
                        onChange={this.onChangeHandler}
                      />
                    </div>
                    <div className="s-in-form-group">
                      {/* <div className="s-in-flex-eye">
                    <VisibilityOffIcon />
                    </div> */}

                      <label form="pwd">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter Password"
                        name="password"
                        onChange={this.onChangeHandler}
                      />
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

                  <div>
                  <LinkedIn
                    clientId="86zeljscdjejfk"
                    onFailure={this.handleFailure}
                    onSuccess={this.handleSuccess}
                    redirectUri="http://localhost:3000/linkedin"
                  >
                    <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
                  </LinkedIn>
                  {!code && <div>No code</div>}
                  {code && <div>Code: {code}</div>}
                  {errorMessage && <div>{errorMessage}</div>}
                </div>

                    <button type="button" className="btn btn-primary btn-block" onClick={this.LinkedinLoginHandler}>
                      Signup with
                      <span className="pl-2 ">
                        Linked <LinkedInIcon />
                      </span>
                    </button>
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
export default withRouter(SignIn);
