import React from 'react'
// import './ProfileView.css'
import Navbar from '../Navbar'
import Menuebar from './Menuebar'
import CarD from './CarD'
import BioGraphy from './BIoGraphy'
// import ADD from './ADD'
// import Reviews from './Reviews'
// import CERTIFICATE from './CERTIFIATE'
// import Experience from './Experience'
// import Education from './Education'
// import PortFolio from './PortFolio'
 function Profileview() {
    

    return (
        <>
        <Navbar value="Post a Project"/>
            <Menuebar/>
            <CarD/>
            <BioGraphy/>
            {/* <PortFolio/>
            <ADD/>
            <Reviews/>
            <CERTIFICATE/>
            <Experience/>
            <Education/> */}
        </>
    )
}
export default Profileview;
