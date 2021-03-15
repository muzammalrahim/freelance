import React, { Component } from "react";
import Navbar from "../../../components/header/Navbar";
import SiSoHero from "../../../components/SiSoHero";
import "./SignIn.css";
import AvatarImage from "../../../../src/AvatarImage.png";
import loginimage from "../../../assets/LoginImage.png";
import Signinfooter from "./Signinfooter";
import { sign_up } from "../../../redux/auth/authCrud";
import { withRouter } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";
import AlertCompo from "./Alert"
import {  Snackbar} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.alert={
      open: false, 
      severity: '',
      message:'',
      title:''
      } 

      this.userValidate={
        username: false,
        email: false,
        password: false,
        passwordConfirm: false,
    }

this.user={
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  account_type: "",
}

    this.state = {
       alert: this.alert,
       user:this.user,
       userValidate: this.userValidate
    };
  }

  handleClose(){
    this.setState({alert:{open:false, severity: '', message:'' }})
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

        let [key, value, {user,userValidate}] = [e.target.name, e.target.value, this.state];
        user[key]=value;
        


        if (key === "email") {
          userValidate[key] = user[key] && this.validateEmail(user[key]) ? true : false;
        } else {
          userValidate[key] = user[key] && user[key].length > 7 ? true : false;
        }

        this.setState({user,userValidate});
    };


  
  submitHandler(isSubmit) {
    let [
      {userValidate},
    ] = [this.state];

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
    let {user:{
      username,
      email,
      password,
      account_type,
      passwordConfirm,
    } } = this.state;

    let isSubmit = null;

    isSubmit = Boolean(this.submitHandler(isSubmit) ? true : false);
    
    if(isSubmit===true)  
      {
         

        if(password === passwordConfirm)
        {
      sign_up(username, email, password, account_type, passwordConfirm)
      .then((res) => {
        this.setState({alert:{open:true, severity:"success", title:"success", message:'User Created Sucessfully'}})
        setTimeout(() => {
          this.props.history.push("/login");
        }, 3000);
      })
      .catch((error) => {
        this.setState({alert:{open:true, severity:"error", title:"Error",
        //  message:`${key+": "+error.response.data[key][0]}`
                 message:'User not Created '
        }})
      })  
        }else if(password != passwordConfirm){
          this.setState({alert:{open:true, severity:"error", title:"Error", message:'password and confirm password are not match'}})

        }

     } else {
    
       this.setState({alert:{open:true, severity:"error", title:"Error", message:'please! fill your form completely'}})
        }  
  };

  render() {
    let {user:{ username, email, password, passwordConfirm}, alert:{open, severity, message, title}} = this.state;
    return (
      <div className="SignIn-flex-container">
      <Snackbar open={open} autoHideDuration={4000} anchorOrigin={{ vertical:'top', horizontal:'right' }} onClose={()=>{this.handleClose()}}>
      <Alert onClose={()=>{this.handleClose()}} severity={severity}>
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
                    <div className="form-group pt-4">
                      <label form="usr">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        value={username}
                        name="username"
                        onChange={this.signupChangeHandler}
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
                        onChange={this.signupChangeHandler}
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
                        onChange={this.signupChangeHandler}
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
                        pattern=".{8,}"  
                        onChange={this.signupChangeHandler}
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
        
        <AlertCompo/>
        <Signinfooter />
      </div>
    );
  }
}

export default withRouter(SignupPage);
