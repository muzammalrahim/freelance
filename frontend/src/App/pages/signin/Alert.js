import React from "react";
import "./alert.css";
import rectangle from "../../../assets/Rectangle.png";
import alertpic from "../../../assets/1-01.png";
import BG from '../../../assets/BG (1).png'
const Alert = () => {
  return (
    <div className="alert-page">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-sm-6 pl-5 pt-5">
         
                <img src={BG} alt="/"/>
                <div className="alert-img-wrap pl-5">
                    <img src={alertpic} alt="/"/>
                </div>
                <div className="alert-front-img">
                <img src={rectangle} alt="/"/>
                </div>
          </div>
          <div class="col-md-6 col-sm-6 pt-5 pb-5">
              <h5 class="alert-text pb-3">Join over 15,000+ tech people</h5>
              <h1 class="font-weight-bold pb-3 w-50">
                Get instant alert on your inbox
              </h1>
              <p class="alert-para pb-3 font-size-16 w-75">
                We receive over 50 new job submission at our website. Subscribe
                to our newsletter and get instant job alert on your inbox to
                apply.{" "}
              </p>
            <form >
              <div class="input-group">
             
                <input
                  class="btn btn-lg bg-white"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

                <button
                  class="btn btn-info btn-lg text-uppercase font-weight-bold"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
