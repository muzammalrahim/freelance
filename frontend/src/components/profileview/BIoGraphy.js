import React, { useEffect, useState} from "react";
import "./BioGraphy.css";
import list from '../../App/pages/helper/api';


function dataCreated(id, account_title, mobile_no, skills, street, language ,BIO) {
  return{id, account_title, mobile_no, skills, street, language ,BIO};
}
function BioGraphy() {
 
  const [data, setData] = useState ([]);

  function getdata() {


    list('api/v1/profile/')
    .then((response)=>{
      let dataget = [];
      console.log("show response:",response);
      response.getdata.map((get)=>{
        dataget.push(dataCreated(get.id, get.mobile_no, get.skills, get.language, get.description ,get.BIO ))

      })
      setData(dataget);
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
          {data.map((get) => (
          <address>
            
            <div className="tst">
              <div className="container">
                
                <div className="contact-info row pt-3">
                  <div className="col-md-3 pl-4">
                
        
  
                    <p>{get.BIO}</p>
               </div>
                  <div className="col-md-9">
                    <p>
                    {get.description}
                    </p>
                  </div>
                </div>
                <div className="contact-info row">
                  
                  <div className="col-md-3 pl-4">
                    <p>Email</p>
                  </div>
                  <div className="col-md-9">
                    <a href="jack14@gmail.com ">jack14@gmail.com </a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                    <a href="97787879879767 ">97787879879767</a>
                  </div>
                </div>
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                    <p>Address</p>
                  </div>
                  <div className="col-md-9">
                    <a href="jack14@gmail.com ">
                      Lorem Ipsum is simply dummy text of the printing.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </address>
                       
                       )
                       )
                 }
                       
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
