import React, { useEffect, useState} from "react";
import "./card.css";
import Status from "../../assets/Status.png";
import india from "../../assets/india.png";
import Display from "../../assets/Display.png";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import StarRateIcon from '@material-ui/icons/StarRate';
import Uploading from './ImageUploader'
import list  from '../../App/pages/helper/api';


function Card() {
  // var today = new Date(),
  // time= today.getHours() + ':' + today.getMinutes();

  const currTime = new Date().toLocaleTimeString();
  
  // var hours = new Date().getHours();
  // var minutes = new Date().getMinutes();

  const [carddata, setcardData] = useState ('');
 
  function  dataCollection() {
      console.log("show response:");
      list('api/v1/accounts/profile/')
      .then((response)=>{
        console.log("show response:",response.data);
        const {...carddata} = response.data;
         setcardData(carddata);
      
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
            <div className="pt-3 pb-2">
            <Uploading/>
            </div>
              <div className="profile pt-3">
                <h5><b>{carddata?.user?.username}</b></h5>
                <h5>{carddata.account_title}</h5>
              </div>
              <div className="text-center pb-1">
                4.5 <StarRateIcon style={{color : 'orange'}}/>
              </div>
              <div className="complete-profile pb-3">
                <h5>Completed Profile</h5>
                <span style={{color : '#34c1ae'}}> 3/5 </span>Followups
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
                    It’s Currently {currTime} here
                    </p>
                    </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                    <img src={Display} className="img_setting_screen" alt="" />
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
