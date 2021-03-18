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

import list from "../helper/api";
import { connect } from "react-redux";
import { RegistrationTabBarAction } from "../../../redux/actions/RegistrationTabBarAction";

class TabbarRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabindex: null,
      userid: null,
    };
  }


  handler = () => {
    let { tabindex } = this.state;
    this.setState({ tabindex: tabindex + 1 });

    this.props.tabChangeHandler(tabindex);
  };

  handler2 = () => {
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

  stateHandler(stateData,isSubmit) {
    console.log("personal state data", stateData);
    console.log("is", isSubmit);
  }

  personalProfileStateHandler(stateData) {
    console.log("neeeeee", stateData);
  }

  idVerificationStateHandler(stateData) {
    console.log("neeeeee", stateData);
  }
  paymentInformationStateHandler(stateData) {
    console.log("neeeeee", stateData);
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

              <div className="tabbar_tabarlist pt-4 pb-5 Changepadding ml-3 ">
                <div className="ml-4 container">
                  <div class="Tab">
                    <span
                      class=" "
                      onClick={() => this.setState({ tabindex: 1 })}
                    >
                      {/*
              <button type="button" class={"btn btn-outline-secondary btn-circle btn-md " + (this.state.tabindex=== 1 ? 'ButtonclsActive': 'hidden')} onClick={() => this.setState({ tabindex: 1 })}> 1</button> */}

                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 1 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 1 })}
                      >
                        1
                      </button>
                      <span class={"text2" + (this.state.tabindex===1 ? 'y-text':'hidden')} onClick={() => this.setState({ tabindex: 1 })}>Personal Profile</span>

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
                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 2 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 2 })}
                      >
                        2
                      </button>
                      <span class={"text2" + (this.state.tabindex===2 ? 'y-text':'hidden')} onClick={() => this.setState({ tabindex: 2 })}>Professional Profile</span>

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
                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 3 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 3 })}
                      >
                        3
                      </button>
                      <span class={"text2" + (this.state.tabindex===3 ? 'y-text':'hidden')} onClick={() => this.setState({ tabindex: 3 })}>ID Verification</span>

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
                      <button
                        className={
                          "Buttoncls " +
                          (tabindex === 4 ? "ButtonclsActive" : "hidden")
                        }
                        onClick={() => this.setState({ tabindex: 4 })}
                      >
                        4
                      </button>
                      <span class={"text2" + (this.state.tabindex===4 ? 'y-text':'hidden')} onClick={() => this.setState({ tabindex: 4 })}>Payment Information</span>

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
                      <span class={"text2" + (this.state.tabindex===5 ? 'y-text':'hidden')} onClick={() => this.setState({ tabindex: 5 })}>Hourly Rate</span>
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
                <PersonalProfile onStateChange={this.stateHandler} />
              )}
              {tabindex === 2 && (
                <ProfessionalProfile2
                  onStateChange={this.personalProfileStateHandler}
                />
              )}
              {tabindex === 3 && (
                <IdVerification
                  onStateChange={this.idVerificationStateHandler}
                />
              )}
              {tabindex === 4 && (
                <PaymentInformation onStateChange={this.stateHandler} />
              )}
              {tabindex === 5 && (
                <HourlyRate onStateChange={this.stateHandler} />
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
                        this.handler();
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
      console.log("tab in redux:", tabindex);
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
