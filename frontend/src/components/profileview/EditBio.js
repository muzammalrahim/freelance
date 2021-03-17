import React, { useEffect, useState} from "react";
import "./Editbio.css";
import list  from '../../App/pages/helper/api';
import {put}  from '../../App/pages/helper/api';
import { useHistory , useParams } from 'react-router-dom';


function EditUser() {
  let history = useHistory();
  const {id} =useParams();
  // alert(id);
  

  const [user, setUser] = useState({
    description :'',
    email : " ",
    mobile_no : " ",
    street : " "
  })
const loadUser = () => {
  list(`api/v1/profile/${id}/`)
  .then((response) => {
    const{...data} = response.data;
    console.log("get data :" ,response.data)
    setUser(data);
 })
  
}

const onInputChange = e =>
{
   setUser({...user ,
    [e.target.name]: e.target.value
   })

}

  const handleChange = async e => {
    e.preventDefault();
   put(`api/v1/profile/${id}/`,user)
    .then((response) => {
       console.log("response :" ,user)
       history.push(`/ProfileView`);
      //  alert("data has been sucessfully updated")
    })
    }
    useEffect(() => {
      loadUser();
    },[]);
  
  return (
      <div className="ui-comments">
        <div class="container bg-white">
          <div class="row pt-5">
            <div className="btn-edit col-md-6 pl-4">
              <h>Personal Profile</h>
            </div>
            <div class="col-md-6 pr-4">
              <button type="button" class="btn btn-primary btn-sm float-right" onClick={handleChange}>
          Update
              </button>
            </div>
            <address>
       
                <div className="container">
                  <div className="contact-info row pt-3">
                    <div className="col-md-3 pl-4">
                      <p>BIO</p> 
                </div>
                    <div className="col-md-9">
                      <p>
                      {/* {user && user.description ? user.description : ''} */}
                      {
                      
                       <div className="Editbiotext pt-2">
                    <textarea
                      type="text"
                      className="Editbiotext"
                      value={user.description}
                      name="description"
                      onChange={e => onInputChange(e)}
                    />
                  </div>
                     
                      }
                      </p>
                    </div>
                  </div>
                  <div className="contact-info row">
                    <div className="col-md-3 pl-4">
                      <p>Email</p>
                    </div>
                    <div className="col-md-9">
                     
                      {/* <input 
                      type="text"
                      name="email"
                      value= {user?.user?.email}
                      onChange={e => onInputChange(e)}
                      /> */}
                       
                    </div>
                  </div>
                  <div className="contact-info row">
                    <div className="col-md-3 pl-4">
                      <p>Mobile Number</p>
                    </div>
                    <div className="col-md-9">
                 
                      <input 
                      type="text"
                      name="mobile_no"
                      value={user.mobile_no}
                      onChange={e => onInputChange(e)}
                      />
                       
                    </div>  
                    </div>
                    <div className="contact-info row">
                      <div className="col-md-3 pl-4">
                        <p>Address</p>
                      </div>
                      <div className="col-md-9">
                      <input 
                      type="text"
                      name="street"
                      value={user.street}
                      onChange={e => onInputChange(e)}
                      />
                      </div>
                    </div>
                  </div>
            </address>
          </div>
        </div>
      </div>
  );
}
export default EditUser;
