import React, { useEffect, useState} from "react";
import "./BioGraphy.css";
import list,{put}  from '../../App/pages/helper/api';

// function dataCreated(account_title,description,mobile_no,street ,email) {


//   return{account_title,description,mobile_no,street,email};
// }


function BioGraphy() {
  function handleClick(e) {
    e.preventDefault(put('api/v1/profile/')
    )
  console.log('clicked')
}
 
  const [profiledata, setprofileData] = useState ('');
  const [skills, setSkills] = useState ('');

  function getdata() {

    

    console.log("show response:");
    list('api/v1/profile/')
    .then((response)=>{
      // console.log("show response:",response.data[1]);
      const {...rest} = response.data[2];
    // console.log('skill: ',rest.skills);
      //  response.data.map((rest)=>{
      //   dataCreated(rest.description, rest.account_title ,rest.mobile_no,rest.street,rest.user.email))
   

      //  })
       //console.log("dataget",dataget)
       setprofileData(rest);
       const user_skills = rest.skills.map((skill, index) =>{
                return(
                <li>
                  <a href="#" class="pl-3 pr-3 pt-1 pb-1">{skill.name}</a>
                </li>)
              })
        setSkills(user_skills);
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
           
            <button type="button" class="btn btn-primary btn-sm float-right" onClick={handleClick}>
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
                  {/* {profiledata && profiledata.email ? profiledata.user.email : ''} */}
                  
                    <a href="jack14@gmail.com ">{profiledata?.user?.email} </a>
                  </div>
                </div>
                
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                  {/* {profiledata && profiledata.mobile_no ? profiledata.mobile_no : ''} */}
                    <a href="9778787989767 ">{profiledata.mobile_no}</a>
                   </div>  
                  </div>
                  <div className="contact-info row">
                    <div className="col-md-3 pl-4">
                      <p>Address</p>
                    </div>
                    <div className="col-md-9">
                    {/* {profiledata && profiledata.street ? profiledata.street : ''} */}
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
              {console.log("loop",skills)}
              </div>
         
            </div>        
            
            {skills && 
              <div class="container">
                <div class="row">
                    <ul className="lanuage-tag">
                     { 
                      skills  
                    }
                    </ul>
                    </div>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default BioGraphy;
