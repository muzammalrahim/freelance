import React from "react";
import "./portfoliodetails.css";
import GetImage from "../../App/pages/registration/GetImage";
import Multiselect from "./multiselect/Multiselect";
import { Link } from "react-router-dom";
const PortfolioDetails = (props) => {
  return (
    <div className="ap-detail">
      <div className="ap-detail-box pb-5 pt-5">
        <div className="container">
          <div className="row bg-white">
            <div className="col-md-9 pt-4">
              <div className="col-md-4 pb-3">Add Details</div>
              <div className="col-md-6">
                <label for="inputtext">Your role in project</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputtext"
                  placeholder="Enter role"
                />
              </div>
              <div className="row pl-3">
                <div className="col-md-12 pt-4">
                  <div className="form-group ">
                    <label for="description">Project Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      placeholder="Text"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row pl-3">
                <div className="col-md-6">
                  <Multiselect/>
                </div>
                <div className="col-md-6">
                <Multiselect />
                </div>
              </div>
              <div className="row pt-4 pl-3">
                <div className="col-md-6">
                  <Multiselect />
                </div>
                <div className="col-md-6">
                <Multiselect />
                </div>
              </div>

              <div className="row pt-5 pb-5">
                <div className="col-md-6 pl-4">
                  <p className="">Upload Images</p>
                  <GetImage 
                 />
                </div>
                <div className="col-md-6">
                  <p className="">Upload Videos</p>
                  <GetImage />
                </div>
              </div>
              <div className="row pt-5 pb-3 pl-3">
                  <div className="col-md-6">
                      <a href="/AddPortfolio"> Previous</a>
                  </div>
                  <div className="col-md-6">
                    <Link to="/DetailsPreview">
                  <button type="button" className="btn btn-primary pull-right">NEXT STEP</button>
                  </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioDetails;
