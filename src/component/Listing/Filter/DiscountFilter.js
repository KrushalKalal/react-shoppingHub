import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class DiscountFilter extends Component{

    filterDiscount = (event) => {
        let brandId = this.props.brandId;
        let discountId = event.target.value;
        let discountUrl;
        if(discountUrl === ""){
            discountUrl = `${url}/${brandId}`
        }else{
            discountUrl = `${url}/${brandId}?discountId=${discountId}`
        }
        axios.get(discountUrl)
        .then((res) => {this.props.productPerDiscount(res.data)})
    }
    render(){
        return(
            <div class="filter_discount  ilter_margin" onChange={this.filterDiscount}>
                    <span>Discount</span>
                    <div>
                    <label className="radio">
                        <input type="radio" name="discount" value=""/>All
                    </label>
                    </div>
                    <div>
                            <input type="radio" name="discount" value="1"/>
                            <label>30% off</label>
                    </div>
                    <div>
                            <input type="radio" name="discount" value="2"/>
                            <label>40% off</label>
                    </div>
                    <div>
                            <input type="radio" name="discount" value="3"/>
                            <label>50% off</label>
                    </div>
                    <div>
                            <input type="radio" name="discount" value="4"/>
                            <label>60% off</label>
                    </div>
                    <div>
                            <input type="radio" name="discount" value="5"/>
                            <label>70% off</label>
                    </div>
               </div>
        )
    }
}

export default DiscountFilter