import React from 'react'
import { MenuItems,AccountSettingMenuItems } from "./MenuItems";
/*import './defaultmenu.css';*/
import AvatarImage from '../../AvatarImage.png';

function DefaultMenu(props) {
    return (
      <nav className="navbar navbar-expand-md">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse">
              <ul className='default-menu nav navbar-nav'>
                  
              
                  { props.value===2 ?  AccountSettingMenuItems.map((item, index)=>{
                    return(
                      <li key={index}>
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
                <div>
                  <a href="#" class="notification mr-3">
                    <span><i class="fas fa-bell"></i>15</span>
                    {/* <span class="badge">15</span> */}
                  </a>
                </div>
                </li>
                <li>
                <div className='avatar-user' style={{backgroundImage: `url(${AvatarImage})`}}>
                      
                </div>
                </li>
                <li class="nav-item dropdown pl-3">
                   
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pixelz Warrios</a>
                    <div class="dropdown-menu dropdown-menu-right dropdown">
                        <a href="#" class="dropdown-item"data-toggle="dropdown2">Status</a>
                          <div class="dropdown-menu sub-menu dropdown2">
                            

                            <a href="#" class="dropdown-item">View Profile</a>
                            <a href="#" class="dropdown-item">Account Settings</a>
                            
                            
                          </div>
                        <a href="#" class="dropdown-item">View Profile</a>
                        <a href="#" class="dropdown-item">Account Settings</a>
                        {/* <div class="dropdown-divider"></div> */}
                        <a href="#"class="dropdown-item">Logout</a>
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