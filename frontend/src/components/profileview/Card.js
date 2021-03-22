import React, { useEffect, useState} from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import india from "../../assets/india.png";
import Display from "../../assets/Display.png";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Uploading from './ImageUploader'
import list  from '../../App/pages/helper/api';


function Card() {
  const [carddata, setcardData] = useState ('');
  function  dataCollection() {
      console.log("show response:");
      list('api/v1/profile/')
      .then((response)=>{
        console.log("show response:",response.data[2]);
        const {...rest} = response.data[2];
         setcardData(rest);
      
        })
      }
  
  useEffect(() => {
    dataCollection();
  },[]);

  return (
    <div className="CarD ">
      <div className="container">
        <div className="row bg-white">
          <div className="col-md-12">
           
            <div className="profile pt-3">
             
              <Uploading/>
             
              <p><b>{carddata?.user?.username}</b></p>
      <h5>{carddata.account_title}</h5>
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
                   SAR{carddata.proposal_amount} Per/Hour
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
                  {carddata?.city?.name}
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
                {carddata?.user?.date_joined}
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
