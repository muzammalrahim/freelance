import React from 'react'


import Button from '../../../../src/components/Button';
import {InputField2} from '../../../../src/components/InputField';
import {InputField4} from '../../../../src/components/InputField';
import {RegNavbar} from '../../../../src/components/Navbar';


import Date from './GetDate'


import './PaymentInformation.css'
import '../../../../src/common.css'

import img from '../../../img/PaymentInfo.png'
import img2 from '../../../img/PaymentInfo_F.png'


function PaymentInformation() {
    return (

        <div className='Pf-container'>
            
                        
                    <div className='Pf-rightbox  bg2 b_line2' style={{display:"block",    height: "auto"}}> 
                       
                        <div>

            
                        <div className='pi_icon' style={{backgroundImage: `url(${img})`}}>
                      
                        </div> 
                        <div>
                          <h4 className="pi_Head">Payment Information</h4>
                          <p className="pi_Para"> Creating your account in just a few steps away,
                          Please Fill your bank or card details here</p>
                        </div>
                        </div>

                        <div className="PiDiv">
                        <div className="Rb-1 w46 ml">
                        <InputField2 heading="Card Holder Name" Placeholder=" Enter card holder name"/> 
                        <InputField2 heading="Card Number" Placeholder=" Enter card number"/>
                        <div className="ExpireDate">
                            <Date/>
                            <InputField4 heading="CVV" Placeholder=" Enter CVV"/>
                        </div>
                        
                        
                        </div>       
                        
                        </div>

                    </div>

      
            
        </div>
    )
}

export default PaymentInformation



export function PaymentInformationFooter()
{
    return(
        <>
        <div className='pi_foot' style={{backgroundImage: `url(${img2})`}}></div>
        </>
    )
}