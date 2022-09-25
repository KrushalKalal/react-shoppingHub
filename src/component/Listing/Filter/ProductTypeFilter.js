import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class ProductTypeFilter extends Component{
    filterProductType = (event) => {
        let brandId = this.props.brandId;
        let productTypeId  = event.target.value;
        let productTypeUrl;
        if(productTypeUrl === ""){
            productTypeUrl = `${url}/${brandId}`
        }else{
            productTypeUrl = `${url}/${brandId}?productTypeId=${productTypeId}`
        }
        axios.get(productTypeUrl)
        .then((res) => {this.props.productPerCategory(res.data)})
    }
    render(){
        return(
            <div class="filter_color  filter_margin" onChange={this.filterProductType}>
            <span>Product Category</span>
            <div>
                    <label className="radio">
                        <input type="radio" name="product" value=""/>All
                    </label>
                    </div>
            <div>
                    <input type="radio" name="product" value="1"/>
                    <label>Topwear</label>
            </div>
            <div>
                    <input type="radio" name="product" value="2"/>
                    <label>Bottomwear</label>
            </div>
            <div>
                    <input type="radio" name="product" value="3"/>
                    <label>Innerweat</label>
            </div>
            <div>
                    <input type="radio" name="product" value="4"/>
                    <label>Footwear</label>
            </div>
       </div>
    
        )
    }
}

export default ProductTypeFilter