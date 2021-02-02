import React from 'react'
import Button from '../../../components/Button';
import InputField from '../../../components/InputField';
import Linkedin from '../../../components/linkedin';
import Navbar from '../../../components/profileview/Navbar';
import './SignIn.css'
import SiSoHero from '../../../components/SiSoHero';
import loginimage from '../../../../src/loginimage.png';
import AvatarImage from '../../../../src/AvatarImage.png';
import LOCKER from '../../../assets/LOCKER.png'
import eye from '../../../assets/eye.png'
function SignIn() {
  return (
    <div className="SignUp-flex-container">
      <div className="si-container">
        <Navbar text="New Member?" value="Signup" />
        <SiSoHero />
        <div className="car">
          <div className="hello-container">
            <div
              className="top-bar"
              style={{ backgroundImage: `url(${loginimage})` }}
            >
              <x>Welcome Back!</x>
              <t>Sign in to continue</t>
              <div
                className="avAtar-user"
                style={{ backgroundImage: `url(${AvatarImage})` }}
              ></div>
              <div className="name">
                <InputField heading="Username" Placeholder=" Enter Username" />
              </div>
              <div className="email">
             
                <InputField
                  type="password"
                  heading="Password"
                  Placeholder=" Enter Password"
                />
               <img src={eye}  style={{position: 'relative', right: '25px',top:'-2.5px'}} />
                </div>

               <div className="Forgett">
              
              
                 <Button buttonStyle="btn--Yellow" value="Forgot your password?"/> <span><img src={LOCKER} style={{position: 'relative', left: '349px', top: '359px'}}></img></span>
                 
               </div>
                
              <div className="tos-check">
                <input type="checkbox" id="tos" name="tos"></input>
                <label for="tos"> </label>
                <p>
               Remember me </p>
              </div>
              <div className="su-button-1">
                <Button buttonStyle="btn--yellow1" value="Log In" />
              </div>
              <div className="su-button-2">
                <p style={{position:'absolute', top:'0px',left:'50%'}}>Or</p>
              </div>
              <div className="su-button-3">
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
