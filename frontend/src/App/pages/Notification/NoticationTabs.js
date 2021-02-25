import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AvatarImage1 from '../../../../src/img/AvatarImage1.png';
import AvatarImage2 from '../../../../src/img/AvatarImage2.png';
import AvatarImage3 from '../../../../src/img/AvatarImage3.png';
import AvatarImage from '../../../../src/img/AvatarImage.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="notification-tabs pt-5">
      <div className={classes.root}>
        <AppBar position="static">
          <h1 className="pl-3 pt-4 m-0 notification-heading">Notification</h1>
          <div className="border-bottom">
            <div className="pl-2">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Invites" {...a11yProps(0)} />
                <Tab label="Offers" {...a11yProps(1)} />
                <Tab classes={{ root: 'customlink' }} label="Contract" {...a11yProps(2)} />
                 
              </Tabs>
            </div>
          </div>
        </AppBar>
        <TabPanel className="border-bottom mt-5" value={value} index={0}>
          {/* tab1 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage1} alt="no img"/>
                      <h4 className="pl-2 pt-2">Sarah <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div> 
          {/* tab1 */}

          {/* tab2 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage2} alt="no img"/>
                      <h4 className="pl-2 pt-2">Giana Korsgaard<br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab2 */}

          {/* tab3 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage3} alt="no img"/>
                      <h4 className="pl-2 pt-2">Anika Septimus <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab3 */}

          {/* tab4 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage} alt="no img"/>
                      <h4 className="pl-2 pt-2">Sarah <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab4 */}
          
        </TabPanel>
        <TabPanel className="border-bottom mt-5" value={value} index={1}>
          {/* tab1 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage1} alt="no img"/>
                      <h4 className="pl-2 pt-2">Sarah <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div> 
          {/* tab1 */}

          {/* tab2 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage2} alt="no img"/>
                      <h4 className="pl-2 pt-2">Giana Korsgaard<br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab2 */}

          {/* tab3 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage3} alt="no img"/>
                      <h4 className="pl-2 pt-2">Chance Philips<br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab3 */}

          {/* tab4 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage} alt="no img"/>
                      <h4 className="pl-2 pt-2">Anika Septimus <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab4 */}
        </TabPanel>
        <TabPanel className="border-bottom mt-5" value={value} index={2}>
           {/* tab1 */}
           <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage1} alt="no img"/>
                      <h4 className="pl-2 pt-2">Sarah <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Hii Pixelz Warrios,</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div> 
          {/* tab1 */}

          {/* tab2 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage2} alt="no img"/>
                      <h4 className="pl-2 pt-2">Giana Korsgaard<br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab2 */}

          {/* tab3 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage3} alt="no img"/>
                      <h4 className="pl-2 pt-2">Chance Philips<br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab3 */}

          {/* tab4 */}
          <div className="notification-inner">
            <div className="container">
              <div className="p-3">
                <div className="row">
                  <div className="col-md-3 pl-0">
                    <div className="tabs-inner">
                      <img src={AvatarImage} alt="no img"/>
                      <h4 className="pl-2 pt-2">Anika Septimus <br></br><span>9/22 7:00 AM</span></h4>
                    </div>
                    
                  </div>
                  <div className="col-md-9 text-right pr-0">
                    <ul className="notification-tab-btns">
                      <li class="btn btn-warning text-white btn-lg button-color approve-btn mr-2"><a class="" href="#">Approve</a></li>
                      <li class="btn btn-warning text-white btn-lg button-color reject-btn"><a class="" href="#">Reject</a></li>
                    </ul>
                  </div>
                </div>
                <div className="notification-des">
                <h3>Bring close-toed shoes to class tomorrow</h3>
                <p>
                  I would like to invite you in my job post to review my 
                  post and I want you to work for me. It is important that you 
                  wear close-toed shoes. Please message me if you have any questions! 
                </p>
                </div>
              </div> 
            </div>   
          </div>
          {/* tab4 */}
        </TabPanel>

        
      </div>
    </div>
    
  );
}
