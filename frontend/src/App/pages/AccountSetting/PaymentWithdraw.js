import React, { Component } from 'react'
import './Reports.css';
import './PaymentWithdraw.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
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
		    <div class="container-fluid">
		        
		            <div class="col-md-12 align-self-center bg-white p-5">
		                <div class="pg-heading pb-3">
		                	<div class="row">
		                		<div class="col-md-8 col-lg-8 col-sm-6 pr-5">
		                			<h3 class="font-weight-bold pull-left ">Withdrawal Amount</h3>
		                			<p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		                			tempor incididunt ut labore et dolore magna aliqua.</p>
		                		</div>
		                		<div class="col-md-4 col-lg-4 col-sm-6 pt-3 avai-amount">
		                			<div class="pl-5 ">
		                				<p class="font-weight-bold">Escrow Amount</p>
		                				<h1 class="amount pb-2 font-weight-bold">SAR 500</h1>
		                			</div>
		                			 
		                		</div>
		                	</div>
	                	</div>
		                <div class="pb-3">
		                	<form>
		                		 <label for="amount" class="font-weight-bold">Enter Amount</label>
		                		<div class="form-group payment-input col-md-6">
		                			<input type="text" name="" class="form-control "/>
		                			<span class="">SAR</span>
		                		</div>
		                		<p>Available balance after deducted amount will be <span class="amount font-weight-bold">100 SAR</span></p>
		                		<label for="exampleInputEmail1" class="font-weight-bold">Select method</label>

		                		<div className={"row  pb-3 radio-button pt-3 border-bottom "+ (this.state.RadioclassActive=== 1 ? 'RadioActiveborder': 'hidden')} onClick={() => this.setState({ RadioclassActive: 1 })}>
		                			<div class="col-md-10 col-lg-10 col-sm-12 ">
		                				<div class="pb-2 pt-2">
		                					<span ><FontAwesomeIcon icon={faLandmark} size="3x" /></span>
		                					<span class="font-weight-bold"> Riyad Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 086</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
		                				<div class="form-check ">
											<input class="form-check-input" type="radio" name="flexRadioDefault" value="driect to local bank" checked={this.state.RadioclassActive=== 1}/>
										
										</div>
		                			</div>
		                		</div>
								
		                		<div className={"row  pb-3 radio-button pt-3 border-bottom "+ (this.state.RadioclassActive=== 2 ? 'RadioActiveborder': 'hidden')}  onClick={() => this.setState({ RadioclassActive: 2 })}>
		                			<div class="col-md-10 col-lg-10 col-sm-12">
		                				<div class="pb-2">
		                					<span ><FontAwesomeIcon icon={faLandmark} size="3x" /></span>
		                					<span class="font-weight-bold"> Al Rajhi Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Direct to local bank (INR) - Account ending in 0676</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
		                				<div class="form-check">
											<input class="form-check-input" type="radio" name="flexRadioDefault" value="al rajhi bank" checked={this.state.RadioclassActive=== 2}/>
										</div>
		                			</div>
		                		</div>
		                		<div class="pay-withdraw-button-wrap pull-right pt-3" >
		                			<button class="btn text-grey text-uppercase font-weight-bold mr-2" >cancel</button>
		                			<button class="btn btn-warning text-white text-uppercase font-weight-bold pull-right" >submit</button>
		                		</div>
		                	</form>
		                </div>
		            </div>
		        
		    </div>
		    </div>
			
		</div> );
    }
}
 
export default PaymentWithdraw;
