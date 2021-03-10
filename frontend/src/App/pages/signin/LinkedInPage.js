import React, { Component } from "react";

import {
  Linkedinlogin,
  GettingLinkedinAccessToken,
} from "../../../redux/auth/authCrud";
import { LinkedIn } from "react-linkedin-login-oauth2";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

class LinkedInPage extends Component {
  state = {
    code:"AQQumYDk85HEA4_zKcjWvxTvckrNwkzMIcJyHTirq3bmCaweHhHYOpaAGRenLvK9nzeCeZyK5SSlxjQPnQd-KsFcnQr3yeliB7gRIcP5rWCWl3ciAAuqk4YJSjwFVpgX8SevozRB_Cx9o3nzn2jUb6vpGspJjVzZ099XUwwdsieoe_RtIXjldXx0FKmol0g0c2TubvCjCTlFgGT3qr8",
    errorMessage: "",
    access_token: "",
  };

  handleSuccess = (data) => {
    let { code, access_token } = this.state;

    this.setState({
      code: data.code,
      errorMessage: "",
    });

    if (data.code) {
      GettingLinkedinAccessToken(data.code)
        .then((response) => {
          this.setState({ access_token: response.data.access_token });

          if (response.data.access_token) {
            Linkedinlogin(response.data.access_token, data.code)
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
    // Linkedinlogin()
    // .then((response) => {
    //
    // console.log("linkedin reponse",response)
    //
    // })
    // .catch(() => {
    // disableLoading();
    // });
  };

  render() {
    const { code, errorMessage, access_token } = this.state;
    return (
      <div>
        <LinkedIn
          clientId="86zeljscdjejfk"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
        >
          <button
            type="button"
            style={{ width: "39.5vw" }}
            className="btn btn-primary btn-block "
            onClick={this.LinkedinLoginHandler}
          >
            Signup with
            <span className="pl-2">
              Linked <LinkedInIcon />
            </span>
          </button>
        </LinkedIn>
   
        {!code && <div>No code</div>}
        {code && <div>Code: {code}</div>}
        {code && <div>access token: {access_token}</div>}
        {errorMessage && <div>{errorMessage}</div>} 
      </div>
    );
  }
}

export default LinkedInPage;