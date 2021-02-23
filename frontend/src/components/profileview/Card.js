import React from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import india from "../../assets/india.png";
import Display from "../../assets/Display.png";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
function Card() {
  return (
    <div className="CarD ">
      <div className="container">
        <div className="row bg-white">
          <div className="col-md-12">
            <div className="profile pt-3">
              <img src={Status} className="pb-2" />
              <p>Pixelz Warrios</p>
              <h6>UI/UX Designer</h6>
            </div>

            <div className="complete-profile">
              <h5>Completed Profile</h5>
              <span> 3/5 </span>Followups
            </div>
            <div className="Details-subtext">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                  <h5>Details</h5>
                  </div>

                </div>
                <address>

               
                <div className="row">
                  <div className="col-md-2">
                  <LocalOfferIcon className="img_setting"/>
                  </div>
                  <div className="col-md-10">
                    <a href="">
                  <p>
                    SAR 100 Per/Hour{" "}
                  </p>
                  </a>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2">
                  <img src={india} className="img_setting_Indore" alt=" " />
                  </div>
                  <div className="col-md-10">
                    <a href="">
                  <p>
                  Indore
                  </p>
                  </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                  <WatchLaterIcon className="img_setting"/>
                  </div>
                  <div className="col-md-10">
                    <a href="">
                  <p>
                  It’s Currently 3:43 Pm here
                  </p>
                  </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                  <img src={Display} className="img_setting_screen" alt=" " />
                  </div>
                  <div className="col-md-10">
                    <a href="">
                  <p>
                  Join Decemeber 10, 2015
                  </p>
                  </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                  <FavoriteIcon className="img_setting" />
                  </div>
                  <div className="col-md-10">
                    <a href="10 Recommendation">
                  <p>
                  10 Recommendation
                  </p>
                  </a>
                  </div>
                </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
