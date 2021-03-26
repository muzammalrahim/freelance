import React, { Component } from "react";
import "./TabBarReg.css";
import { RegNavbar } from "../../../components/Navbar";
import PersonalProfile, { PersonalProfileTabFooter } from "./PersonalProfile";
import IdVerification, { IdVerificationFooter } from "./IdVerification";
import PaymentInformation, {
  PaymentInformationFooter,
} from "./PaymentInformation";
import HourlyRate, { HourlyRateFooter } from "./HourlyRate";
import ProfessionalProfile2 from "./ProfessionalProfile2";
import ProfessionalProfile2Footer from "./ProfFooter";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import CheckIcon from "@material-ui/icons/Check";
import list, { post } from "../helper/api";
import { connect } from "react-redux";
import { RegistrationTabBarAction } from "../../../redux/actions/RegistrationTabBarAction";

import { Snackbar } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

class TabbarRegistration extends Component {
  constructor(props) {
    super(props);
    this.alert = {
      open: false,
      severity: "",
      message: "",
      title: "",
    };
    this.state = {
      alert: this.alert,
      tabindex: null,
      userid: null,
      registrationProcessid: null,
      sendData: false,
      showPersonalProfileError: false,
      personalProfileIsSubmited: false,
      personalProfileTickIcon: false,
      professionalProfileError: false,
      professionalProfileIsSubmited: false,
      iDVerificationError: false,
      iDVerificationIsSubmited: false,
      hourlyRateError: false,
      hourlyRateErrorIsSubmited: false,

      goolo: false,

      account_type: this.props.account_type,
      data: {},
    };
  }

  handleClose() {
    this.setState({ alert: { open: false, severity: "", message: "" } });
  }

  sendDataHandler = () => {
    let { sendData } = this.state;
    sendData = true;
    this.setState({ sendData });
  };

  tabUphandler = () => {
    let { tabindex, personalProfileIsSubmited, userid, data } = this.state;

    console.log("current tab index", tabindex);
    this.setState({ showPersonalProfileError: true });
    console.log("personalProfileIsSubmited", personalProfileIsSubmited);
    console.log("userid", userid);
    if (userid) {
      console.log("personalProfileIsSubmited", personalProfileIsSubmited);
      if (personalProfileIsSubmited === true) {
        post("api/v1/freelancer_profile/", data)
          .then((response) => {
            console.log("freelancer_profile res:", response);
            console.log("freelancer_profile res:", response.data.id);
            this.setState({
              personalProfileTickIcon: true,
              registrationProcessid: response.data.id,
              tabindex: tabindex + 1,
              alert: {
                open: true,
                severity: "success",
                title: "success",
                message: "you have successfully complete step one",
              },
            });
          })

          .catch((error) => {
            this.setState({
              alert: {
                open: true,
                severity: "error",
                title: "Error",
                //  message:`${key+": "+error.response.data[key][0]}`
                message: "step one not completed",
              },
            });

            console.log("error", error);
          });
      } else {
      }
    }

    this.props.tabChangeHandler(tabindex);
  };

  tabDownhandler = () => {
    this.setState({
      tabindex: this.state.tabindex - 1,
    });
  };

  getTabIndexFromLocalStorage = (tabindex2) => {
    this.setState({ tabindex: tabindex2 });
  };

  componentDidMount() {
    let { userid } = this.state;
    list("api/v1/accounts/profile/")
      .then((res) => {
        var data = JSON.parse(res.data.id);
        userid = data;

        this.setState({ userid });
        console.log("profile", this.state.userid);
      })
      .catch((error) => {});

    var tabindex2 = 1;

    if (localStorage.getItem("tabindex")) {
      tabindex2 = parseInt(localStorage.getItem("tabindex"));
    }

    this.getTabIndexFromLocalStorage(tabindex2);
  }

  personalProfilestateHandler = (stateData, isSubmit) => {
    let { data } = this.state;
    if (isSubmit === true) {
      data = {
        mobile_no: stateData.mobile_number,
        street: stateData.address,
        service: "service1",
        user: this.state.userid,
        account_type: this.state.account_type,
        city: {
          name: stateData.city,
        },
        country: {
          name: stateData.country,
        },
      };
      this.setState({ data });
      this.setState({ personalProfileIsSubmited: true });
    } else {
    }
    this.setState({ showPersonalProfileError: false });
  };

  professionalProfileStateHandler = (stateData, isSubmit) => {
    console.log("professional profile:", stateData);
  };

  idVerificationStateHandler(stateData, imgOf) {
    if (imgOf === "idCard") {
      console.log("id card img", stateData);
    } else if (imgOf === "drivingLicense") {
      console.log("driving  img", stateData);
    }
  }
  paymentInformationStateHandler(stateData) {
    // console.log("neeeeee", stateData);
  }

  hourlyRateStateHandler() {}

  render() {
    let {
      tabindex,
      alert: { open, severity, message, title },
      personalProfileIsSubmited,
      professionalProfileIsSubmited,
      personalProfileTickIcon,
      iDVerificationIsSubmited,
      hourlyRateErrorIsSubmited,
    } = this.state;

    if (tabindex > 1) {
      localStorage.setItem("tabindex", tabindex);
    } else if (tabindex === 1) {
      localStorage.setItem("tabindex", 1);
    }

    return (
      <div className="tabbar  tabbarMain_bg">
        <Snackbar
          open={open}
          autoHideDuration={6000}
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
        <div className="container tabbarContainer">
          <div className="row">
            <div className="tabbar_min_height col-xs-6 col-sm-4 col-md-4 col-lg-3 p-0 tabbar_sidebar_bg">
              <div>
                <RegNavbar />
              </div>
              <div className="tabbar_tabarlist pt-4 pb-5 Changepadding ml-3 ">
                <div className="ml-4 container">
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 1 })}
                    >
                      {/*
              <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}> 1</button> */}

                      {personalProfileTickIcon ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 1 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 1 })}
                        >
                          1
                        </button>
                      )}

                      <span
                        class={
                          "text2" +
                          (this.state.tabindex === 1 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 1 })}
                      >
                        Personal Profile
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 1 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 2 })}
                    >
                      {professionalProfileIsSubmited ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 2 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 2 })}
                        >
                          2
                        </button>
                      )}
                      <span
                        class={
                          "text2" +
                          (this.state.tabindex === 2 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 2 })}
                      >
                        Professional Profile
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 2 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 3 })}
                    >
                      {iDVerificationIsSubmited ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 3 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 3 })}
                        >
                          3
                        </button>
                      )}
                      <span
                        class={
                          "text2" +
                          (this.state.tabindex === 3 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 3 })}
                      >
                        ID Verification
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 3 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 4 })}
                    >
                      {this.state.tabindex > 4 ? (
                        <span
                          style={{
                            color: "white",
                            background: " #1DA799",
                            borderRadius: "25px",
                          }}
                        >
                          <CheckIcon />
                        </span>
                      ) : (
                        <button
                          className={
                            "Buttoncls " +
                            (tabindex === 4 ? "ButtonclsActive" : "hidden")
                          }
                          onClick={() => this.setState({ tabindex: 4 })}
                        >
                          4
                        </button>
                      )}
                      <span
                        class={
                          "text2" +
                          (this.state.tabindex === 4 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 4 })}
                      >
                        Payment Information
                      </span>
                    </span>{" "}
                  </div>{" "}
                  <div
                    className={
                      "line " + (tabindex === 4 ? "lineActive" : "hidden")
                    }
                  >
                    {" "}
                  </div>
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 5 })}
                    >
                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 5 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 5 })}
                      >
                        5
                      </button>
                      <span
                        class={
                          "text2" +
                          (this.state.tabindex === 5 ? "y-text" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 5 })}
                      >
                        Hourly Rate
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>

              {tabindex === 1 && <PersonalProfileTabFooter />}
              {tabindex === 2 && <ProfessionalProfile2Footer />}
              {tabindex === 3 && <IdVerificationFooter />}
              {tabindex === 4 && <PaymentInformationFooter />}
              {tabindex === 5 && <HourlyRateFooter />}
            </div>

            <div className="tabbar_min_height col-xs-6 col-sm-8 col-md-8 col-lg-9  p-5 tabbar_panel_background">
              {tabindex === 1 && (
                <PersonalProfile
                  onStateChange={this.personalProfilestateHandler}
                  tabindex={this.state.showPersonalProfileError}
                />
              )}
              {tabindex === 2 && (
                <ProfessionalProfile2
                  onStateChange={this.professionalProfileStateHandler}
                />
              )}
              {tabindex === 3 && (
                <IdVerification
                  onStateChange={this.idVerificationStateHandler}
                />
              )}
              {tabindex === 4 && (
                <PaymentInformation
                  onStateChange={this.paymentInformationstateHandler}
                />
              )}
              {tabindex === 5 && (
                <HourlyRate onStateChange={this.hourlyRatestateHandler} />
              )}

              <div className="container tabbar_next_pre_btn_background pt-4 pb-5">
                {tabindex > 1 && (
                  <div>
                    <button
                      type="button"
                      className="btn rounded-pill "
                      onClick={() => this.setState({ tabindex: tabindex - 1 })}
                    >
                      {" "}
                      Previous Step
                    </button>
                  </div>
                )}

                {tabindex < 5 ? (
                  <div>
                    <button
                      type="button"
                      className="btn tb_nextButton"
                      onClick={() => {
                        this.tabUphandler();
                        this.sendDataHandler();
                      }}
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                ) : (
                  <div>
                    <button type="button" className="btn tb_nextButton">
                      {" "}
                      FINISH <ArrowRightAltIcon />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tabChangeHandler: (tabindex) => {
      // console.log("tab in redux:", tabindex);
      dispatch(
        RegistrationTabBarAction({
          type: "REGISTRATION_TAB_CHANGE",
          payload: tabindex,
        })
      );
    },
  };
};

export default connect(null, mapDispatchToProps)(TabbarRegistration);
