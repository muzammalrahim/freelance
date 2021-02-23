import React from "react";
import "./Reviews.css";
import Stanton from "../../assets/Stanton.png";
import Cooper from "../../assets/Cooper.png";
import Button from "../Button";
import CustomizedRatings from '../../App/pages/jobs/Rating'
export function Reviews(props) {
  return (
    <div className="Reviews">
      <div class="container bg-white">
        <div class="review-row pt-4 pb-3">
          <div class="col-md-12">
            <div class="font-weight-bold">
              <h className="reviews-header">Reviews & Rating</h>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row pb-3">
            <div class="col-md-6 pb-3 pt-3">
              <img src={Stanton} alt="/" />
              <h class="pl-3"> Ann Stanton </h>
            </div>
            <div class="col-md-6 pt-3">
              <div className="float-right">
              <CustomizedRatings />
              </div>
             
           
            </div>
            <div class="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div class="row pb-3">
            <div class="col-md-6 pb-3">
              <img src={Cooper} alt="/"/>
              <h class="pl-3"> Cooper Dokidis </h>
            </div>
            <div class="col-md-6 float-right">
            <div className="float-right">
              <CustomizedRatings />
              </div>
            </div>
            <div class="col-md-12">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
            </div>
          </div>
          <div class="row pl-3 pb-4">
            <div class="col-md-12 offset-md-3">
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
