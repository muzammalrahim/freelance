import React, { Component } from "react";

import {
  Linkedinlogin,
  GettingLinkedinAccessToken,
} from "../../../redux/auth/authCrud";
import { LinkedIn } from "react-linkedin-login-oauth2";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

class LinkedInPage extends Component {
  state = {
    code:"",
    errorMessage: "",
    access_token: "",
  };

  handleSuccess = (data) => {
       console.log(' handleSuccess ', data );
    this.setState({
      code: data.code,
      errorMessage: "",
    });

  

    if (this.state.code) {

      console.log("if  this.state.code")

       
  

      GettingLinkedinAccessToken(this.state.code)
        .then((response) => {
      
            console.log("response to access token :",response.data.access_token)
              
          this.setState({ access_token: response.data.access_token });

           console.log("a1 access token:",this.state.access_token)
           console.log("a1 access code:",this.state.code)

          if (this.state.access_token) {

            const data = JSON.stringify({
              access_token:this.state.access_token, 
              code:this.state.code
            })


            Linkedinlogin(data)
              .then((response) => {
                console.log("linkedin login response", response);
              })
              // .then(({ data: { token } }) => {
              // localStorage.setItem("token", token);
              //
              // if (localStorage.getItem("token")) {
              // this.props.history.push("/");
              // }
              // })
              .catch(() => {
                // disableLoading();
              });
          } else {
          }
        })
        .catch(() => {
          // disableLoading();
        });
    }
  };


  

  handleFailure = (error) => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage,
    });
  };

  LinkedinLoginHandler = () => {

  };


  requestProfile = () => {
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_CLIENT_ID}&scope=r_liteprofile&state=123456&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };


  render() {
    const { code, errorMessage, access_token } = this.state;
    return (
      <div>
       
          <button
            type="button"
            style={{ width: "39.5vw" }}
            className="btn btn-primary btn-block "
            onClick={this.requestProfile}
          >
            Signup with
            <span className="pl-2">
              Linked <LinkedInIcon />
            </span>
          </button>
  
   
      <button onClick={this.tokenAccess}>  </button>

        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {code && <div>access token: {access_token}</div>}
        {errorMessage && <div>{errorMessage}</div>} 
      </div>
    );
  }
}

export default LinkedInPage;
