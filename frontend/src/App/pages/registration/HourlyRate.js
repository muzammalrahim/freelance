import React from 'react'


import Button from '../../../../src/components/Button';
import {InputField3} from '../../../../src/components/InputField';
import {RegNavbar} from '../../../../src/components/Navbar';

import './HourlyRate.css'
import '../../../../src/common.css'

import img from '../../../img/HourlyRate.png'
import img2 from '../../../img/HourlyRate_F.png'



function HourlyRate() {
    return (

        <div className='Pf-container'>
            



                     {/*left section END*/}

                     {/*Right section*/}
                    <div className='hr_rightbox   bg2 b_line2' style={{display:"block",    height: "auto"}}>
                          {/*Rc 1_inn*/}
                        <div>
                          <div className='hr_icon' style={{backgroundImage: `url(${img})`}}></div> 
                          <div>
                            <h4 className="hr_Head">Houtly Rate</h4>
                            <p className="hr_Para">Creating your account in just a few steps away,
                            Please Fill your bank or card details here</p>
                          </div>
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="firstTextField">
                            <div className="Rb-1 w46 ml">
                                <InputField3 heading="Proposal Amount" Placeholder=" " type="number"/> 
                              
                                <div> <p className="hr_Para1">15% service free</p></div>
                                <div className="d-Iflex1 hr_Para3 mpara">
                                    <div> <p >0</p></div>
                                    <div className="ml93"> <p >SAR</p></div>
                                 
                                </div>
                            
                            </div>       
                        
                        </div>

                         {/*Rc 1_inn*/}
                        <div className="Rb-1 w46 ml">
                            <InputField3 heading="Total amount you’ll recieve" Placeholder=" " type="number"/> 
                            <p className="hr_Para2 mt2per">Tuwaiq Freelancer service fees can be charge as 15%</p>
                        </div>
                     
                         {/*Rc 1_inn*/}

                        
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