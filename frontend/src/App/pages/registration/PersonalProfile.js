import React from "react";
import "./PersonalProfile.css";
import img from "../../../img/personalProfile.png";
import img2 from "../../../img/personalProfile_F.png";
import {connect} from "react-redux"
class PersonalProfile extends React.Component {
  constructor(props) {
    super(props);

    this.Per_Profile = {
      first_name: "",
      mobile_number: "",
      city: "",
      last_name: "",
      address: "",
      country: "",
     
    };

    this.per_profileValidate = {
      first_name: false,
      mobile_number: false,
      last_name: false,
      address: false,
      country: false,
      city: false,
     
    };

    this.state = {
      per_profile: this.Per_Profile,
      per_profileValidate: this.per_profileValidate,
      personal_profile_isSubmit_value: false,

    
    };
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

  componentDidMount() {
    if (localStorage.getItem("personal_profile")) {
      var storedData = JSON.parse(localStorage.getItem("personal_profile"));
      this.setState({ per_profile: storedData });
    }

    console.log("state",this.state)
  }

  submitHandler(ans) {
    let [
      { per_profile, per_profileValidate,},
    ] = [this.state];
    let impValue = 0;
    Object.values(per_profileValidate).map((values) => {
      if (values === false) {
        impValue = impValue + 1;
      }
    });

    if (impValue > 0) {
      localStorage.removeItem("personal_profile");
      return false;
    } else if (impValue === 0) {
      localStorage.setItem("personal_profile", JSON.stringify(per_profile));

      return true;
    }
  }

  changeHandler(e) {
    let isSubmit = null;

    let [
      key,
      value,
      { per_profile, per_profileValidate, personal_profile_isSubmit_value },
    ] = [e.target.id, e.target.value, this.state];

    per_profile[key] = value;

    if (key === "email") {
      per_profileValidate[key] =
        per_profile[key] && this.validateEmail(per_profile[key]) ? true : false;
    } else {
      per_profileValidate[key] =
        per_profile[key] && per_profile[key].length > 3 ? true : false;
    }

    this.setState({ per_profile, per_profileValidate });


    var ans = Boolean(this.submitHandler(isSubmit) ? true : false);

    this.setState({
      per_profile,
      per_profileValidate,
      personal_profile_isSubmit_value,
    });

    this.props.onStateChange(this.state)


  }


  

  render() {
    let { per_profile } = this.state;
  console.log("active ",this.state.active)
    return (
      <div className="PersonalProfile">
        <div className="personalProfile_bg Pf-rightbox  p-5">
          <div className="container">
            <div className="pl-2">
              <div className="row">
                <div
                  className="personalprofileicon"
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
                <div className="Profile_info">
                  <h4 className="personalprofileHead">Personal Profile</h4>
                  <p className="personalprofilePara">
                    {" "}
                    Creating your account in just a few steps away, Fill your
                    Personal detail type.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row pt-3">
                <div className=" col-sm-6 col-md-6">
                  <div className="Rb-0">
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        First Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder="Enter first name"
                        id="first_name"
                        value={per_profile.first_name}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        Mobile number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder=" Enter number"
                        id="mobile_number"
                        value={per_profile.mobile_number}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        City
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder=" Enter city"
                        id="city"
                        value={per_profile.city}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>

                   
                  </div>
                </div>
                <div className=" col-sm-6 col-md-6">
                  <div className="Rb-0">
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        Last name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder=" Enter last name"
                        id="last_name"
                        value={per_profile.last_name}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder=" Enter address"
                        id="address"
                        value={per_profile.address}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label className="pp_inputHeading" for="usr">
                        Country
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        Placeholder=" Enter country"
                        id="country"
                        value={per_profile.country}
                        onChange={(e) => {
                          this.changeHandler(e);
                        }}
                      />
                    </div>

                  
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end of inner container*/}
          </div>
        </div>
        {console.log(" personal profife redux ",this.props.tabindex)}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tabindex: state.RegistrationTabBarReducer,
  };
 
};

export default connect(mapStateToProps)(PersonalProfile);


export function PersonalProfileTabFooter() {
  return (
    <div>
      <div className="bg1  footer_img_padding">
        <div
          className="personalprofile_foot"
          style={{ backgroundImage: `url(${img2})` }}
        ></div>
      </div>
    </div>
  );
}