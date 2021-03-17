import React, { Component } from 'react'
import './Reports.css';
import './PaymentWithdraw.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


class PaymentWithdraw extends Component {
    state = { 
		
		RadioclassActive: 0, 
	}

	addClass=(e)=>
	{
	
		
	}

    render() { 

        return (	
        <div>
            <div class="main-area withdraw">
		            <div class="col-md-12 align-self-center bg-white p-5">
		                <div class="pg-heading pb-3">
		                
	                	</div>
		                <div class="pb-3">
		              

		                		<div className={"row  pb-3 radio-button pt-3 border-bottom "+ (this.state.RadioclassActive=== 1 ? 'RadioActiveborder': 'hidden')} onClick={() => this.setState({ RadioclassActive: 1 })}>
		                			<div class="col-md-10 col-lg-10 col-sm-12 ">
		                				<div class="pb-2 pt-2">
										<span ><FontAwesomeIcon icon={faLandmark} size="2x" color={"" +(this.state.RadioclassActive=== 1 ? '#1DA799' : '#a6a6a6')} onClick={() => this.setState({RadioclassActive: 1 })} /></span>
		                					<span class="font-weight-bold"> Riyad Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 086</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
										<FontAwesomeIcon icon={faEdit} size="1x" color='#a6a6a6' cursor='pointer'/>
		                           <br></br>
										<FontAwesomeIcon icon={faTrash} size="1x"color='#a6a6a6' cursor='pointer'/>
		                			</div>
		                		</div>
								
		                		<div className={"row  pb-3 radio-button pt-3 border-bottom "+ (this.state.RadioclassActive=== 2 ? 'RadioActiveborder': 'hidden')}  onClick={() => this.setState({ RadioclassActive: 2 })}>
		                			<div class="col-md-10 col-lg-10 col-sm-12">
		                				<div class="pb-2">
		                					<span ><FontAwesomeIcon icon={faLandmark} size="2x" color={"" +(this.state.RadioclassActive=== 2 ? '#1DA799' : '#a6a6a6')} onClick={() => this.setState({RadioclassActive: 2 })} /></span>
		                					<span class="font-weight-bold"> Al Rajhi Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 0676</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
									<FontAwesomeIcon icon={faEdit}  color='#a6a6a6' cursor='pointer'/>
		                           <br></br>
										<FontAwesomeIcon icon={faTrash} size="1x" color='#a6a6a6' cursor='pointer'/>
		                			</div>
		                		</div>
		                		<div class="pay-withdraw-button-wrap pull-right pt-3" >
		                			<button class="btn text-grey text-uppercase font-weight-bold mr-2" >cancel</button>
		                			<button class="btn btn-warning text-white text-uppercase font-weight-bold pull-right" >submit</button>
		                		</div>
		                	
		                </div>
		            </div>
		        
		    
		    </div>
			
		</div> );
    }
}
 
export default PaymentWithdraw;
