import React from "react";
import "./Reviews.css";
import Stanton from "../../assets/Stanton.png";
import Cooper from "../../assets/Cooper.png";
import Button from "../Button";
export function Reviews(props) {
  return (
    <div className="Reviews">
      <div className="container bg-white">
        <div className="row pt-4 pb-3 pl-3">
          <div className="col-md-12">
            <div className="font-weight-bold">
              <h className="reviews-header">Reviews & Rating</h>
            </div>
          </div>
        </div>  
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-6 pb-3">
              <img src={Stanton} alt="/" />
              <h className="pl-3"> Ann Stanton </h>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="row pb-3">
            <div className="col-md-6 pb-3">
              <img src={Cooper} alt="/"/>
              <h className="pl-3"> Cooper Dokidis </h>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div className="row pl-3 pb-4">
            <div className="col-md-12 offset-md-3">
              <div className="btn-load">
                <Button buttonStyle="btn--load" value="LOAD MORE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
