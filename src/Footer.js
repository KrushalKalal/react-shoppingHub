import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{
   render(){
    return(
        <footer class="footer_hub container-fluid">
        <div class="footer_hub">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Shopping Hub
                </span>
                <ul>
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">Join Our Team</a></li>
                    <li><a href="#">Terms & Condition</a></li>
                    <li><a href="#">We Respect Your Privacy</a></li>
                    <li><a href="#">Fees & Payment</a></li>
                    <li><a href="#">Return & Refunds Policy</a></li>
                    <li><a href="#">Promotion Terms & Condition</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Help
                </span>
                <ul>
                    <li><a href="#">Track Your Order</a></li>
                    <li><a href="#">Frequently Asked Questions</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Customer Care</a></li>
                    <li><a href="#">How I Redeem My Coupon</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Shop By
                </span>
                <ul>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brand Directory</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Collection</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 footer_link">
                <span>
                    Follow Us
                </span>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Pinterest</a></li>
                   
                </ul>
            </div>
           
        </div>
        <hr />
        <div class="payment">
            <div class="row payment_section">
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 ms-4">
                    <span>Payment Methods</span>
                    <div class="row">
                    <div class="col-lg-3">
                        <img src="https://i.ibb.co/J3jCTSc/netbanking.png" alt="netbanking"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/wMJ8YR2/visa.png" alt="visa"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/FbRKK6m/card.png" alt="card"/>
                    </div>
                    <div class="col-lg-3">
                        <img src="https://i.ibb.co/c8Rph04/cashon.png" alt="cash"/>
                    </div>
                    <div class="col-lg-2">
                        <img src="https://i.ibb.co/PTgL2Mb/wallet.png" alt="wallet"/>
                    </div>
                </div>
                </div>
                <div class="security_margin col-lg-2 col-md-2 col-sm-4 col-xs-12">
                    <span>Secure Systems</span>
                    <div>
                        <img src="https://i.ibb.co/c2fStHM/security.png" alt="security"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </footer>
    )
   }
}

export default Footer