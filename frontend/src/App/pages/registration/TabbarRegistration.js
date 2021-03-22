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

class TabbarRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: null,
      userid: null,
      sendData: false,
      personalProfileIsSubmit: false,
      account_type: this.props.account_type,
      data: {},
    };
  }

  sendDataHandler = () => {
    let { sendData } = this.state;
    sendData = true;
    this.setState({ sendData });

    // console.log("agey mai",sendData);
  };

  tabUphandler = () => {
    let { tabindex } = this.state;

    console.log("current tab index", tabindex);
    this.setState({ personalProfileIsSubmit: true });

    //  setTimeout(() => {
    // this.setState({personalProfileIsSubmit:false})
    // }, 3000);

    if (tabindex === 0) {
       this.personalProfilestateHandler()
      if (tabindex === 5) {
        this.setState({ tabindex: tabindex + 1 });
      }
    }

    this.props.tabChangeHandler(tabindex);
  };

  tabDownhandler = () => {
    this.setState({
      tabindex: this.state.tabindex - 1,
    });
  };

  clickone = (tabindex2) => {
    this.setState({ tabindex: tabindex2 });
  };

  componentDidMount() {
     list("api/v1/accounts/profile/")
     .then((res) => {
       console.log("did mount:",res.data)
     this.setState({ userid: res.data.id });
     console.log("profile", this.state.userid);
     console.log("profile data", res.data);
     })
     .catch((error) => {});

    var tabindex2 = 1;

    if (localStorage.getItem("tabindex")) {
      tabindex2 = parseInt(localStorage.getItem("tabindex"));
    }

    this.clickone(tabindex2);
  }


  accountType = (accountt)=>
  {
    console.log("account type",accountt)
  }


  personalProfilestateHandler = (stateData, isSubmit) => {
    let { data } = this.state;
    if (isSubmit === true) {

      data = {
              mobile_no:stateData.mobile_number, 
              street: stateData.address,
               service: "service1",
                user: 11,
                account_type : this.state.account_type,
                city: {
                  name: stateData.city,
          
                     },
                country: {
                  name: stateData.country,
          
                     }, 
    }

      this.setState({ data });
      console.log("personal profile state data in tabbar:", stateData);
      console.log("data object:",data);
      console.log("issub value", isSubmit);
      // post("api/v1/freelancer_profile/", data)
      // .then((response) => {
      // console.log("freelancer_profile res:", response);
      // })
      //
      // .catch((error) => {
      // console.log("error", error);
      // });
    } else {
    }
    this.setState({ personalProfileIsSubmit: false });
    console.log("pp in", this.state.personalProfileIsSubmit);
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
    let { tabindex } = this.state;

    if (tabindex > 1) {
      localStorage.setItem("tabindex", tabindex);
    } else if (tabindex === 1) {
      localStorage.setItem("tabindex", 1);
    }

    return (
      <div className="tabbar  tabbarMain_bg">
        <div className="container tabbarContainer">
          <div className="row">
            <div className="tabbar_min_height col-xs-6 col-sm-4 col-md-4 col-lg-3 p-0 tabbar_sidebar_bg">
              <div>
                <RegNavbar />
              </div>
              {console.log("state data", this.state.data)}
              <div className="tabbar_tabarlist pt-4 pb-5 Changepadding ml-3 ">
                <div className="ml-4 container">
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 1 })}
                    >
                      {/*
              <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}> 1</button> */}

                      {this.state.tabindex > 1 ? (
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
                      {this.state.tabindex > 2 ? (
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
                      {this.state.tabindex > 3 ? (
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
                  tabindex={this.state.personalProfileIsSubmit}
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
