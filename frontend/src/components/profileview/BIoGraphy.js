import React, { useEffect, useState} from "react";
import "./BioGraphy.css";
import { Link } from  'react-router-dom';
import list  from '../../App/pages/helper/api';


function BioGraphy() {
  const [profiledata, setprofileData] = useState ({
    description : "enter your bio here enter your bio here enter your bio here "
  });
  const [data, setData] = useState ();
  const [getid, setGetId] = useState ({
    
  });

  const [skills, setSkills] = useState ('');

  
  function getDataId () {
    console.log("show response:");
    list('api/v1/accounts/profile/')
    .then((response)=>{
     const data = response.data;
     console.log("freelancerd idfsf:",data.id);

setData(data);
})
}
function getId () {
  console.log("show response:");
  list('api/v1/user/25/')
  .then((response)=>{
   const data = response.data;
   console.log("freelance id:",data.id);

   setGetId(data);
})
}

  function getdata() {
  list('api/v1/freelancer_profile/25/')
.then((response)=>{
const data = response.data;
console.log("freelancerd :",response.data);
setprofileData(data);
       const user_skills = data.skills.map((skills, index) =>{
                return(
                <li>
                  <a href="#" class="pl-3 pr-3 pt-1 pb-1">{skills.name}</a>
                </li>)
              })
        setSkills(user_skills);
    })
    }
    useEffect(() => {
      getdata();
      getDataId();
      getId ();
    },[]);
  return (
    <div className="ui-comments">
      <div class="container bg-white">
        <div class="row pt-4 pb-3">
          <div className="btn-edit col-md-6 pl-4">
            <h>Personal Profile</h>
          </div>
          <div class="col-md-6 pr-4">
            <Link to={`EditBio/${setGetId.id,setData.id}`}>
          
            <button type="button" class="btn btn-primary btn-sm float-right" >
        EDIT
            </button>
            </Link>
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
                  {data && data.email ? data.email : ''}
                    {/* {data.email} */}
                  </div>
                </div>
                
                <div className="contact-info row">
                  <div className="col-md-3 pl-4">
                
                    <p>Mobile Number</p>
                  </div>
                  <div className="col-md-9">
                    <a href="9778787989767 ">
                    {profiledata && profiledata.mobile_no ? profiledata.mobile_no : ''}
                    </a>
                   </div>  
                  </div>
                  <div className="contact-info row">
                    <div className="col-md-3 pl-4">
                      <p>Address</p>
                    </div>
                    <div className="col-md-9">
                      <a href="">
                      {profiledata && profiledata.street ? profiledata.street : ''}  
                  
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
