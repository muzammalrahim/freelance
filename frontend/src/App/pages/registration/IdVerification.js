import React from 'react'


import GetImage from './GetImage'


import './IdVerification.css'
import '../../../../src/common.css'


import img from '../../../img/IdVerfication.png'
import img2 from '../../../img/IdVerfication_F.png'


function IdVerification() {
    return (

        <div className='Pf-container'>
            
                                
                    <div className='Pf-rightbox   bg2 b_line2' style={{display:"block",    height: "auto"}}> 
                       
                        <div>

                    
                                <div className='iv_icon' style={{backgroundImage: `url(${img})`}}>
                            
                                </div> 
                                <div>
                                <h4 className="iv_Head">ID Verification</h4>
                                <p className="iv_Para"> Creating your account in just a few steps away,
                                Please upload your gov verified proofs</p>
                                </div>
                        </div>

                        <div style={{marginTop:"50px"}}>
                                 <div className="mh1">
                                    <p> International Driving License</p>
                                 </div>
                                
                                  <div >
                                        <div className="getimage">
                                        <GetImage/>
                                        </div>
                                   </div>
                        
                        </div>

                        <div style={{marginTop:"50px"}}>
                                 <div className="mh1">
                                    <p> ID CARD</p>
                                 </div>
                                
                                  <div >
                                        <div className="getimage">
                                        <GetImage/>
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