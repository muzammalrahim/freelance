import React from 'react'
import './PortFolio.css'
import Button from "../Button";
import Commercial from '../../assets/Commercial.png'
import Ecomerce from '../../assets/Ecomerce.png'
import Medical from '../../assets/Medical.png'
export function PortFolio(props) {
    

    return (
        <div className="Portfol">
            <div className="comp3">
            <div className="profile-inner">
            <h> Portfolio </h>
            <Button buttonStyle="btn--ADD" value="+ADD" />
            </div>


            </div>
            <div className="row Pic-tag">
                <div className="col-md-4 col-sm-4">
                  <div>
                      <div className='img-wraper'>
                      <img src={Commercial} alt="/"/>
                      </div>
                      <div className="img-des">
                        <p> Ecomerce Project </p>
                        <h>8 Artworks</h>
                      </div>


                  </div>
              </div>
              <div className="col-md-4 col-sm-4 ">
                <div>
                    <div className="img-wraper">
                    <img src={Ecomerce} alt="/"/>
                    </div>
                    <div className="img-des">
                    <p> Ecomerce Project </p>
                    <h>8 Artworks</h>
                    </div>

                </div>
              </div>
            <div className="col-md-4 col-sm-4">
                <div>
                    <div className="img-wraper">
                    <img src={ Medical } alt="/"/>
                    </div>
                        <div className="img-wraper">
                        <p> Ecomerce Project </p>
                        <h>8 Artworks</h>
                        </div>

                    </div>
            </div>

            </div>
        </div>
    )
}
export default PortFolio