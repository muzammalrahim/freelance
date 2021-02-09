import React from 'react'
import './ProfileView.css'
import Navbar from '../Navbar'
import Menuebar from './Menuebar'
import CarD from './CarD'
import BioGraphy from './BIoGraphy'
import PortFolio from './PortFolio'
import Reviews from './Reviews'
import ADD from './ADD'
import Certificate from './Certifcate'
import Experience from './Experience'
import Education from './Education'

 function Profileview() {
    return (
        <>
        <div className="main-profile-page" >
        <Navbar value="Post a Project" className="btn-project"/> 
        <Menuebar/> 
           
           <div className="CARD-container">
               <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3">
                   
                   <CarD/>
                   </div>
                   <div className="col-md-9">
                   {/* <BioGraphy/> */}
                    {/* <PortFolio/> 
                    <Reviews/>
                    <Certificate/>
                    <Experience/>
                    <Education/> */}
                   </div>
               </div>
               </div>
               
            
            {/* <ADD/>
           
           
        
             */}
            </div>
            </div>
        </>
    )
}
export default Profileview;
