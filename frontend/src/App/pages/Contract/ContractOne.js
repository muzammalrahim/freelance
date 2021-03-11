import React, { useState ,useEffect } from 'react'
import ContractNav from "./ContractNav";
import Header from '../../../../src/components/header/Header';
import "../../../assets/css/custom.css";
import ContractView  from "./ContractView"
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ControlledAccordions from './Accordians'
import FooterMenu from './FooterMenu';
import WorkIcon from '@material-ui/icons/Work'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CalanderIcon from '../../../img/calendar.svg';
import AvtarIcon from '../../../img/contract-img.png';
import { useHistory } from 'react-router-dom'

import list from '../../pages/helper/api';


// function createData(id, budget, title, description, skills,category) {
//     return { id, budget, title, description, skills,category };
  
//   }
  

export default function ContractOne () { 

    let history = useHistory();

    const [get ,setGet] = useState ([0]);
    const [getjob, setGetjob] = useState([1])
    // const [rows, setRows] = React.useState([]);

    const handleClick =() =>{
        history.push('/jobs')
    }


    // function setContract (){

        
         
      
    //     //   response.data.map((row)=>{
          
    //     //     job_list.push(createData(row.id, row.budget, row.title, row.description, row.skills,row.category))
    //     //     console.log("faizan2", job_list[0])
    //     //   })
      
    
    
    //   }
    
//     function setContract() {
//         console.log("show response:");
//         list('api/v1/job/')
//         .then((response)=>{
//           console.log("show response:",response.data[1]);
//           const {...data} = response.data[1];
//           setGetjob(data);
//         })
//         .catch(error => console.error (`Error:${error}`));
// }

    function Contract() {
        console.log("show response:");
        list('api/v1/contract/')
        .then((response)=>{
          console.log("show response:",response.data[0]);
          const {...rest} = response.data[0];
          setGet(rest);

          list('api/v1/job/')
          .then((response)=>{
              console.log("faizan")
        //   let job_list = [];
          const data = response.data;
          console.log("faizanfinal :" , response.data[0]);
          setGetjob(data);
          })
          
          
        })
        .catch(error => console.error (`Error:${error}`));
}
      
       

    useEffect(() => {
        Contract(); 
        // setContract();
        // getJob();
      },[]);


        return (
            <div className="contract-pg1">
                {/* top header */}
                <div className="top-area">
                    <Header />
                </div>
                {/* top header */}
                <div className="contractone-main">
                    <div className="container">
                        <div className="main-wrap pt-5 pl-4 pr-4">
                            <div className="row">
                                <div className="col-md-3 col-sm-4">
                                    <ContractNav/>
                                </div>
{/* 
                                {
                                            get.map((gets ,index) =>(

                                        */}
                                <div className="col-md-9 col-sm-8">
                                    <ContractView/>
                                    <div className="cont-row">
                                        
                                        <div className="con-des-area">
                                        <div className="content-heading">
                                            <div className="contact1-avatar"><img src={AvtarIcon} alt="no img"/></div>
                                            <h3 className="pl-3">
                                                  {getjob.title  ? getjob.title  : " " }
                                            
                                            
                                            </h3>
                                            <Button variant="outlined" color="secondary" onClick={handleClick}>View Job</Button> 
                                        </div>
                                        {/* Tags */}
                                        <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-11">
                                            <ul className="duration pl-1">
                                                <li className="pr-3">
                                                    <p className="m-icon"><span className="pr-1"><WorkIcon/></span>Monthly</p>
                                                </li>
                                                <li className="pr-3">
                                                    <p className="m-icon"><span className="pr-1"><img src={CalanderIcon} alt="no img"/></span>{get.start_date}</p>
                                                </li>
                                                <li className="pr-3">
                                                    <p className="m-icon"><span className="pr-1"><WatchLaterIcon/></span>20 min ago</p>
                                                </li> 

                                            </ul>
                                        </div>

                                        </div>
                                        {/* Tags */}
                                        </div>
                                        
                                        <div className="mile-stones">
                                            <ControlledAccordions/>
                                        </div>
                                        <div className="invoice-details">
                                            <h3>Invoice Receipt</h3>
                                            <FooterMenu/>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
     {/* ))
    } */}

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
                
                
            </div>
        )
    }