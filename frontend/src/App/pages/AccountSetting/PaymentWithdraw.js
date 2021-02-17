import React, { Component } from 'react'
import Header from '../../../components/header/Header';
import './Reports.css';
class PaymentWithdraw extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <Header/>
            <div class="main-area withdraw">
		    <div class="container">
		        <div class="row pt-5 pb-5">
		            <div class="col-md-12 align-self-center bg-white p-5">
		                <div class="pg-heading pb-3">
		                	<div class="row">
		                		<div class="col-md-8 col-lg-8 col-sm-6 pr-5">
		                			<h3 class="font-weight-bold pull-left ">Withdrawl Amount</h3>
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
		                		<div class="form-group payment-input">
		                			<input type="text" name="" class="form-control "/>
		                			<span class="">SAR</span>
		                		</div>
		                		<p>Available balance after deducted amount will be <span class="amount font-weight-bold">100 SAR</span></p>
		                		<label for="exampleInputEmail1" class="font-weight-bold">Select method</label>
		                		<div class="row border-bottom pb-3 radio-button">
		                			<div class="col-md-10 col-lg-10 col-sm-12 ">
		                				<div class="pb-2 pt-2">
		                					<span ><i class="fas fa-landmark fa-3x"></i></span>
		                					<span class="font-weight-bold">Riyad Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Driect to local bank (INR) - Account ending in 086</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
		                				<div class="form-check ">
											<input class="form-check-input" type="radio" name="flexRadioDefault" checked/>
										</div>
		                			</div>
		                		</div>
		                		<div class="row pt-3 radio-button">
		                			<div class="col-md-10 col-lg-10 col-sm-12">
		                				<div class="pb-2">
		                					<span ><i class="fas fa-landmark fa-3x"></i></span>
		                					<span class="font-weight-bold">Al Rajhi Bank</span>
		                				</div>
		                				<p class="font-weight-bold">Driect to local bank (INR) - Account ending in 0676</p>
		                			</div>
		                			<div class="col-md-2 col-lg-2 col-sm-12 pull-right">
		                				<div class="form-check">
											<input class="form-check-input" type="radio" name="flexRadioDefault"/>
										</div>
		                			</div>
		                		</div>
		                		<div class="pay-withdraw-button-wrap pull-right" >
		                			<button class="btn text-grey text-uppercase font-weight-bold mr-2" >cancel</button>
		                			<button class="btn btn-warning text-white text-uppercase font-weight-bold pull-right" >submit</button>
		                		</div>
		                	</form>
		                </div>
		            </div>
		        </div>
		    </div>
		    </div>
		</div> );
    }
}
 
export default PaymentWithdraw;
