import React from 'react'

import Button from '../../../../src/components/Button';
import {InputField2} from '../../../../src/components/InputField';
import {RegNavbar} from '../../../../src/components/Navbar';

import './PersonalProfile.css'
import '../../../../src/common.css'

import img from '../../../img/personalProfile.png'
import img2 from '../../../img/personalProfile_F.png'

function PersonalProfile() {
    return (

        <div className='Pf-container'>
            
          {/* <div className='d-Iflex'> */}
                
                
                    
                    <div className='Pf-rightbox   bg2 b_line2' style={{display:"block",    height: "auto"}}> 
                       
                        <div>

            
                        <div className='personalprofileicon' style={{backgroundImage: `url(${img})`}}>
                      
                        </div> 
                        <div>
                          <h4 className="personalprofileHead">Personal Profile</h4>
                          <p className="personalprofilePara"> Creating your account in just a few steps away,
                          Fill your Personal detail type.</p>
                        </div>
                        </div>

                        <div style={{display:"flex",marginTop:"50px"}}>
                        <div className="Rb-1 w46 ml">
                        <InputField2 heading="First Name" Placeholder=" Enter first name"/> 
                        <InputField2 heading="Mobile number" Placeholder=" Enter number"/>
                        <InputField2 heading="City" Placeholder=" Enter city"/>
                        
                        </div>       
                        <div className="Rb-2 w46 ml2">
                            <InputField2 heading="LAST Name" Placeholder=" Enter last name"/> 
                            <InputField2 heading="Address" Placeholder=" Enter address"/>
                            <InputField2 heading="Country" Placeholder=" Enter country"/>
                        
                           
                        </div> 
                        </div>

                        
                        
                    </div>

            </div>
            
        //   </div> 
    )
}

export default PersonalProfile

export function PersonalProfileTabFooter( ) 
{
    return (
        <>

<div className='w-33 bg1 '>
                {/* <h1> hello</h1>*/}
                <div className='personalprofile_foot' style={{backgroundImage: `url(${img2})`}}></div>
                </div>
                </>
                );
              
}


export function PersonalProfileFooter2( ) 
{
    return (
        <>

    <div>
                        
    <div className="pf_prevButton">
    <button class="">Previous Step</button>
    </div>
    <div className="pf_nextButton">
    <Button buttonStyle='btn--yellow' value="Next"/>
    </div>
    </div>

    </>
  );

}