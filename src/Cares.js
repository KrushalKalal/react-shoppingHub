import React,{Component} from 'react';
import './Cares.css';

class Cares extends Component{
  render(){
    return(
        <div>
        <section class="cares container-fluid">
        <div class="row">
            <h2 class="col-lg-12">SHOPPING HUB CARES</h2>
        </div>
        <div class="row">
            <h5 class="col-lg-12">WE DO NOT ASK FOR YOUR BANK ACCOUNT OR CARD DETAILS VERBALLY OR TELEPHONICALLY.</h5>
        </div>
        <div class="row">
            <h5 class="col-lg-12">WE ALSO DO NOT ASK FOR MONEY TO PARTICIPATE IN ANY OF OUR OFFERS OR RUN ANY LUCKY DRAWS.</h5>
        </div>
    </section>


    <section class="quality container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <img src="https://i.ibb.co/nM08dZ0/exchange.png" alt="exchange"/>
                <h6>EASY EXCHANGE</h6>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src="https://i.ibb.co/k5Cnv61/handpicked.png" alt="handpicked"/>
              <h6>100% HANDPICKED</h6>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <img src="https://i.ibb.co/PtBWPLk/quality.png" alt="quality"/>
              <h6>ASSURED QUALITY</h6>
          </div>
        </div>
    </section>
    </div>
    )
  }
}

export default Cares