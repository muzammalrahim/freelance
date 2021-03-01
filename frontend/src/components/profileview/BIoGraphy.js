import React, { useEffect, useState} from "react";
import "./BioGraphy.css";
import list from '../../App/pages/helper/api';

// function dataCreated(account_title,description,mobile_no,street ,email) {


//   return{account_title,description,mobile_no,street,email};
// }


function BioGraphy() {

 
  const [profiledata, setprofileData] = useState ('');

  function getdata() {
    console.log("show response:");
    list('api/v1/profile/')
    .then((response)=>{
      console.log("show response:",response.data[0]);
      const {...rest} = response.data[0];
    console.log('description: ',rest.description);
      //  response.data.map((rest)=>{
      //   dataCreated(rest.description, rest.account_title ,rest.mobile_no,rest.street,rest.user.email))
   

      //  })
       //console.log("dataget",dataget)
       setprofileData(rest);
    })
    }
 
    useEffect(() => {
      getdata();
    },[]);
  
  return (

    <div className="ui-comments">
     
      <div class="container bg-white">
        <div class="row pt-4 pb-3">
          <div className="btn-edit col-md-6 pl-4">
            
            <h>Personal Profile</h>
          </div>
          <div class="col-md-6 pr-4">
           
            <button type="button" class="btn btn-primary btn-sm float-right">
        EDIT
            </button>
         
          </div>
          <address>
            
            <div className="tst">
              <div className="container">
                
                <div className="contact-info row pt-3">
                  <div className="col-md-3 pl-4">
                
        
  
                    <p>BIO</p> 
               </div>
                  <div className="col-md-9">
                    <p>
                    {profiledata && profiledata.description ? profiledata.description : ''}
                    </p>
                  </div>
                </div>
                <div className="contact-info row">
             
                  <div className="col-md-3 pl-4">
                    <p>Email</p>
                  </div>
                  <div className="col-md-9">
                  {profiledata && profiledata.email ? profiledata.user.email : ''}
                  {/* {console.log("email:")} */}
                    <a href="jack14@gmail.com ">{profiledata.user.email} </a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                  {profiledata && profiledata.mobile_no ? profiledata.mobile_no : ''}
                    <a href="97787879879767 ">{profiledata.mobile_no}</a>
                   </div>  
                  </div>
                  <div className="contact-info row">
                    <div className="col-md-3 pl-4">
                      <p>Address</p>
                    </div>
                    <div className="col-md-9">
                    {profiledata && profiledata.street ? profiledata.street : ''}
                      <a href="jack14@gmail.com ">
                     {profiledata.street}
                    
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </address>
                       
          <div class="container">
            <div class="row">
              <div class="col-md-12 pl-4">
              <p> Skills</p>
              </div>

            </div>

              <div class="container">
                <div class="row">
                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">PHP</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">Website design</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">Wordpress</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">Java</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-1">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">UIUX</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">Branding</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-2">
                    <ul className="lanuage-tag">
                      <li>
                        <a href="#" class="pl-2 pr-2 pt-1 pb-1">Logo</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BioGraphy;
