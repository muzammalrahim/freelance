import React from "react";
import Navbar from "../../../components/profileview/Navbar";
import "./SignIn.css";
import ToggleButton from "./ToggleButton";
import SiSoHero from "../../../components/SiSoHero";
import loginimage from "../../../assets/LoginImage.png";
import AvatarImage from "../../../../src/AvatarImage.png";
import LOCKER from "../../../assets/LOCKER.png";
import  Alert from '../../../App/pages/signin/Alert';
import Signinfooter from "./Signinfooter";
function SignIn() {
  return (
    <div className="SignUp-flex-container">
      <div className="si-container">
        <Navbar text="New Member?" value="Signup" />
      </div>
      <div>
        <SiSoHero />
      </div>
      <div class="main-bg">
        <div class="container">
          <div class="row">
            <div className="col-md-6 align-self-center bg-white offset-md-3">
            <div className="text-content">
                <div className="welcome-text pt-3 pl-3 pull-left">
                  <h5>Welcome!</h5>
                  <h6>Sign up to continue</h6>
                </div>

                <div class="pull-right">
                  <img src={loginimage} alt="/" />
                </div>
              </div>
              <div className="floww pl-3 pr-3">
                <img src={AvatarImage} alt="/" className="si-pic-tag" />
                <form className="form-field pt-5">
                  <div class="form-group pt-4">
                    <label for="usr">Full name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="usr"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="pwd"
                      placeholder="Enter Password"
                    />
                  </div>
                </form>
              </div>
              <div className="sign-up-btn  pl-3 pr-3 pb-3">
              <div class="pull-right">
                <img src={LOCKER} alt="" className="pr-1"/>

                 <a href="#" data-target="#pwdModal" data-toggle="modal">Forgot your password? </a>
                </div>
                <div class="checkbox pt-3">
                  <label>
                    <input type="checkbox" value="" /> Remember me
                  </label>
                </div>
                <div className="pt-4">
                  <button type="button" class="btn btn-default btn-block">
                    Log In
                  </button>
                </div>
                <div>
                  <h6 class="text-center pt-2">or</h6>
                </div>
                <div className="pt-1 pb-4">
                  <button type="button" class="btn btn-primary btn-block">
                    Signup with
                    <span class="pl-2 font-weight-bold">
                      Linked <i class="fab fa-linkedin pl-1"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert/>
      <Signinfooter/>
    </div>
  );
}

export default SignIn;
