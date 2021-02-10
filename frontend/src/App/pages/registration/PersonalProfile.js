import React from 'react'

import Button from '../../../../src/components/Button';
import {InputField2} from '../../../../src/components/InputField';
import './PersonalProfile.css'
import '../../../../src/common.css'

import img from '../../../img/personalProfile.png'
import img2 from '../../../img/personalProfile_F.png'


function PersonalProfile() {
    return (       
        <div className='Pf-container1'>
            
          {/* <div className='d-Iflex'> */}
                
                
                    
                    <div className='Pf-rightbox   bg2 b_line2'>
                       
                        <div className="row container-fluid"><div className="row container-fluid">

                        <div className="img-wrap">
                        <div className='personalprofileicon' style={{backgroundImage: `url(${img})`}}>
                      
                        </div>
                        </div>

                        <div className="Profile_info">

                          <h4 className="personalprofileHead">Personal Profile</h4>
                          <p className="personalprofilePara"> Creating your account in just a few steps away,
                          Fill your Personal detail type.</p>
                        </div>
                        </div>

                        <div className="container">
                        <div className="row pt-3">
                        <div className="col-md-6">
                        <div className="Rb-0">
                        <div class="form-group">
                            <label  className="pp_inputHeading" for="usr">First Name</label>
                            <input type="text" class="form-control"  Placeholder=" Enter first name"/>
                        </div>
                        <div class="form-group">
                            <label  className="pp_inputHeading" for="usr">Mobile number</label>
                            <input type="text" class="form-control" Placeholder=" Enter number"/>
                        </div>
                        <div class="form-group">
                            <label  className="pp_inputHeading" for="usr">City:</label>
                            <input type="text" class="form-control"  Placeholder=" Enter city"/>
                        </div>
                        
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="Rb-0">
                        <div class="form-group">
                            <label  className="pp_inputHeading" for="usr">LAST Name</label>
                            <input type="text" class="form-control" Placeholder=" Enter last name"/>
                        </div>
                        <div class="form-group">
                            <label  className="pp_inputHeading" for="usr">Address</label>
                            <input type="text" class="form-control" Placeholder=" Enter address"/>
                        </div>
                        <div class="form-group">
                            <label   className="pp_inputHeading"for="usr">Country</label>
                            <input type="text" class="form-control" Placeholder=" Enter country"/>
                        </div>

                        </div>
                        </div>
                        </div>
                        </div>



                    </div>

            </div>
            
         </div>
    )
}

export default PersonalProfile

export function PersonalProfileTabFooter( ) 
{
    return (
       <div>

<div className=' bg1 '>
                {/* <h1> hello</h1>*/}
                <div className='personalprofile_foot' style={{backgroundImage: `url(${img2})`}}></div>

                          </div>
                </div>
                );
              
}


export function PersonalProfileFooter2( ) 
{
    return (
        <div>

    <div>
                        
    <div className="pf_prevButton">
    <button class="">Previous Step</button>
    </div>
    <div className="pf_nextButton">
    <Button buttonStyle='btn--yellow' value="Next"/>
    </div>
    </div>

    </div>
  );

}