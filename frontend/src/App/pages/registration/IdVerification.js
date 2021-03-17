import React, { useState } from 'react';
import GetImage from './GetImage'
import './IdVerification.css'
import '../../../../src/common.css'
import img from '../../../img/IdVerfication.png'
import img2 from '../../../img/IdVerfication_F.png'


function IdVerification() {

    const [drivingLicense, setdrivingLicense] = useState('');
    const [idCard, setidCard] = useState('');

  function  drimgUpload(base64file)
    {
        setdrivingLicense(base64file)
    
    }

   function icimgUpload(base64file)
    {
      
        setidCard(base64file)

    }


    return (
        
  <div className="idVerification">
        <div className='Pf-container'>
            
                                
                    <div className='Pf-rightbox   bg2  p-5'>
                    <div class="container" >
                        <div>

                                 <div class="row ">
                                    <div className='iv_icon' style={{backgroundImage: `url(${img})`}}>

                                    </div>
                                    <div className="iv_info">
                                    <h4 className="iv_Head">ID Verification</h4>
                                    <p className="iv_Para"> Creating your account in just a few steps away,
                                    Please upload your gov verified proofs</p>
                                    </div>
                             </div>
                        </div>

                        <div class="row">
                                <div class="col-sm-12">
                                 <div className="mh1">
                                    <p className="iv_texthead"> International Driving License</p>
                                 </div>
                                
                                    <div >
                                        <div className="">
                                        <GetImage idVerf_DL_imgUpload={drimgUpload} value="idVerf_DL_imgUpload" />
                                        </div>
                                   </div>
                                </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 pt-4">
                                 <div className="mh1">
                                    <p className="iv_texthead"> ID CARD</p>
                                 </div>
                                
                                  <div >
                                        <div className="getimage">
                                        <GetImage idVerf_IC_imgUpload={icimgUpload}         value="idVerf_IC_imgUpload"/>
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

export default IdVerification


export function IdVerificationFooter( ) 
{
    return (
        <>

        <div className='iv_foot' style={{backgroundImage: `url(${img2})`}}></div>
    
        </>
        );
      
}