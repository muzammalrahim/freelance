import React from "react";
import "./alert.css";
import rectangle from "../../../assets/Rectangle.png";
import alertpic from "../../../assets/1-01.png";
import BG from "../../../assets/BG (1).png";
import Dropdrop from "../../../assets/Dropdrop.png";
const Alert = () => {
  return (
    <div className="alert-page">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 pt-5 ml-0 mr-0">
            <img src={BG} alt="/" />
            <div className="alert-img-wrap pl-5">
              <img src={alertpic} alt="/" />
            </div>
            <div className="alert-front-img">
              <img src={rectangle} alt="/" />
              <div class="alert-page-picutre">
                <div class="container">
                  <div class="row pl-3 pr-2">
                    <div class="alert-page-text col-md-8 col-sm-8 pl-5">
                      <a href="">
                        <h4>New Job Alert!</h4>
                      </a>
                      <a href="">
                        <h6 class="alert-time pb-3">20 mins ago</h6>
                      </a>
                    </div>
                    <div class="col-md-6"></div>
                  </div>
                  <div class="row pl-5">
                    <div class="drop-img col-md-2 col-sm-2">
                      <img src={Dropdrop} alt="/" class="pt-3" />
                    </div>
                    <div class="alert-pages col-md-9 col-sm-9 pt-3 pr-3">
                      <a href=""> DropDrop is hiring Marketing Manager!</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="al-picture-email">
                <a href="">
                  <i class="far fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 pt-5 pb-5">
            <h5 class="alert-text pb-3">Join over 15,000+ tech people</h5>
            <h1 class="font-weight-bold pb-3 w-75">
              Get instant alert on your inbox
            </h1>
            <p class="alert-para pb-3 font-size-16 w-75">
              We receive over 50 new job submission at our website. Subscribe to
              our newsletter and get instant job alert on your inbox to apply.{" "}
            </p>
            <form>
              <div class="input-group">
                <div class="input-group mb-5">
                  <div class="input-group-prepend"></div>
                  <input
                    class="form-control email-input"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary d-flex align-items-center text-uppercase font-weight-bold"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
