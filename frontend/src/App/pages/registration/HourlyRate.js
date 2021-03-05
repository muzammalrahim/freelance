import React from "react";

import "./HourlyRate.css";
import "../../../../src/common.css";

import img from "../../../img/HourlyRate.png";
import img2 from "../../../img/HourlyRate_F.png";

import { nameAction } from "../../../redux/actions/myaction";
import { connect } from "react-redux";

function HourlyRate(props) {
  return (
    <div className="HourlyRate">
      {/*left section END*/}

      {/*Right section*/}
      <div className="hr_rightbox   bg2 b_line2 p-5">
        {/*Rc 1_inn*/}
        <div class="container">
          <div class="row pl-3">
            <div class="col-sm-12">
              <div
                className="hr_icon"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div>
                <h4 className="hr_Head">Houtly Rate</h4>
                <p className="hr_Para">
                  Creating your account in just a few steps away, Please Fill
                  your bank or card details here
                </p>
              </div>
            </div>
          </div>

          {/*Rc 1_inn*/}
          <div className="firstTextField">
            <div className="Rb-1 col-md-8">
              <label className="hr_Para3">Proposal Amount</label>
              <div class="form-group input-group mb-3">
                <input
                  placeholder="0"
                  type="text"
                  class="form-control form-controlBorderNone"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text labelBoderRight hr_Para3">
                    SAR
                  </span>
                </div>
              </div>

              <div>
                {" "}
                <p className="hr_Para1 pt-3">15% service free</p>
              </div>
              <div class="row">
                <div class="col-md-12 pb-3 pl-3 pr-4">
                  <div class=" hr_Para3">
                    <div class="pull-left">0</div>
                    <div class="pull-right">SAR</div>
                  </div>
                </div>
              </div>

              <label className="hr_Para3">Total amount you’ll recieve</label>
              <div class="form-group input-group mb-3">
                <input
                  placeholder="0"
                  type="text"
                  class="form-control form-controlBorderNone"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text labelBoderRight hr_Para3">
                    SAR
                  </span>
                </div>
              </div>

              <div>
                {" "}
                <p className="hr_Para2 mt-4">
                  Tuwaiq Freelancer service fees can be charge as 15%
                </p>
              </div>
            </div>
          </div>

          {/*Rc 1_inn*/}
        </div>
      </div>
      {/*Right section end*/}

      {/* <h1>redux state value:{props.name}</h1> 
<button onClick ={()=>{props.changeName()}}> changeName </button>*/}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("redux state:", state.nameReducer);
  return {
    name: state.nameReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(nameAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HourlyRate);

export function HourlyRateFooter() {
  return (
    <div className="HourlyRate_footer_padding">
      <div
        className="hr_foot"
        style={{ backgroundImage: `url(${img2})` }}
      ></div>
    </div>
  );
}
