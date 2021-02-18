import React from 'react'
import './Reviews.css'
import Stanton from '../../assets/Stanton.png'
import Cooper from '../../assets/Cooper.png'
import Button from '../Button'
export function Reviews(props) {
    

    return (
        <div className="Reviews">
            <div className="profile-inner">
            <p> Reviews & Rating</p>
            </div>
            <div className="rate">
            
            </div>
           
            <div  className="ANN">
            <div>
           <img src={Stanton}/>
          <h>   Ann Stanton </h>
           <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
             make a type specimen book. It has survived not only five centuries, 
           </p>
            </div>

            <div>
            <img src={Cooper}/>
            <h>   Cooper Dokidis </h>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
             make a type specimen book. It has survived not only five centuries, 
           </p>
            </div>
    
            <div className="btn-load">
            <Button buttonStyle="btn--load" value="LOAD MORE" />
            </div>
            </div>
            
        </div>
    )
}
export default Reviews;