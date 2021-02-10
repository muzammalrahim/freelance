import React from 'react'
import {InputField3} from '../../../../src/components/InputField';

import './HourlyRate.css'
import '../../../../src/common.css'

import img from '../../../img/HourlyRate.png'
import img2 from '../../../img/HourlyRate_F.png'



function HourlyRate() {
    return (

        <div className='Pf-container'>
            
           
                
             
                     {/*left section END*/} 
                      
                     {/*Right section*/} 
                    <div className='hr_rightbox   bg2 b_line2' >
                          {/*Rc 1_inn*/}
                        <div class="container-fluid">
                        <div class="row pl-3">
                          <div class="col-sm-12">
                          <div className='hr_icon' style={{backgroundImage: `url(${img})`}}></div> 
                          <div>
                            <h4 className="hr_Head">Houtly Rate</h4>
                            <p className="hr_Para">Creating your account in just a few steps away,
                            Please Fill your bank or card details here</p>
                          </div>
                          </div>
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="firstTextField">
                            <div className="Rb-1 col-md-8">
                                <InputField3 heading="Proposal Amount" Placeholder=" 0 " type="number"/> 
                              
                                <div> <p className="hr_Para1">15% service free</p></div>
                                <div class="row">
                                    <div class="col-md-12">
                                   <div class=" hr_Para3"><p >0</p></div>
                                   <div class=" hr_Para3 float-right"><p >SAR</p></div>
                                   </div>
                                     
                                </div>
                            
                            </div>       
                        
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="Rb-1 col-md-8">
                            <InputField3 heading="Total amount you’ll recieve" Placeholder=" 0 " type="number"/>
                            <div className="hourly-text">
                            <p className="hr_Para2 mt2per">Tuwaiq Freelancer service fees can be charge as 15%</p>
                            </div>

                        </div>

                     
                         {/*Rc 1_inn*/}
                     
                         </div>
                    </div>
                    {/*Right section end*/} 


            
        </div>
    )
}

export default HourlyRate


export function HourlyRateFooter ()
{
  return(
 
      <>
      <div className='hr_foot' style={{backgroundImage: `url(${img2})`}}></div>
      </>
  )

}