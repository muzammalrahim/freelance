import React, { useState,useEffect } from 'react'
import { MenuItems,AccountSettingMenuItems } from "./MenuItems";
import AvatarImage from '../../AvatarImage.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Link} from 'react-router-dom';
import Logout from "../../App/pages/signin/Logout"
import AccountSettingMain from '../../App/pages/AccountSetting/AccountSettingMain'
import list from '../../App/pages/helper/api'

function DefaultMenu(props) {

  const [data, setData] = useState('');
  const [id, setId] = useState();
  const [user, setUser] = useState({
  first_name : "" 
  });

  const getData = () =>{
   
    list('api/v1/accounts/profile/')
    .then((response)=>{
    const data = response.data;
    console.log("freelancerd idfsf:",data.id);
    
    setData(data);
    })
    }
    
    const getUser = () => {
    list(`api/v1/freelancer_profile/5/`)
    .then((response) => {
    const data= response.data;
    var id = JSON.parse(response.data.id);
    console.log("freelancerd id:",id);
    setUser(data);
    })
    }
    
    
    useEffect(() => {
    getData();
    getUser();
    }, [])

    return (
      <nav className="navbar navbar-expand-md">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            
            <div id="navbarCollapse" class="collapse navbar-collapse">
              <ul className='default-menu nav navbar-nav'>
                  
              
                  { props.value===2 ?  AccountSettingMenuItems.map((item, index)=>{
                    return(
                      <li key={index} className="pr-3">
                          <a className={item.cName} href={item.url}>
                              {item.title}
                          </a>
                      </li>
                      
                    )
                  }) : MenuItems.map((item, index)=>{
                    return(
                      <li key={index}>
                          <a className={item.cName} href={item.url}>
                              {item.title}
                          </a>
                      </li>
                      
                    )
                  })}

           
                  
              </ul>
              <ul class="nav navbar-nav ml-auto user-pro">
                <li>
                <div className="">
                  <a href="#" class="notification mr-3">
                    <span><NotificationsIcon/>15</span>
                    {/* <span class="badge">15</span> */}
                  </a>
                </div>
                </li>
                <li>
                <div className='avatar-user' style={{backgroundImage: `url(${AvatarImage})`}}>
                      
                </div>
                </li>
                <li class="nav-item dropdown pl-1">
                   
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">{data.first_name} {data.last_name}</a>
                    <div class="dropdown-menu dropdown-menu-right dropdown">
                        <a href="#" class="dropdown-item users-status "data-toggle="dropdown">Status</a>
                          <ul className="user-states pt-2 pl-2 pr-2 ml-5">
                            <li>
                              <p className="user-active-status dropdown"><span class="active-state mr-2"></span>Active</p>
                            </li>
                            <li>
                              <p className="user-inactive-status dropdown"><span class="inactive-state mr-2 mb-0"></span>Inactive</p>
                            </li>
                          </ul>
                          <Link to="/profileview" class="dropdown-item">View Profile</Link>
                          <Link to="/account-setting" class="dropdown-item">Account Setting</Link>
                          <Link href="#"  class="dropdown-item"><Logout/></Link>
                          
                    </div>
                </li>
                <li>
                </li>
            </ul>
            </div>
            
      </nav>
     
    )
}






export default DefaultMenu
