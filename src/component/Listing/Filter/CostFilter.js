import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class CostFilter extends Component{
    filterCost = (event) => {
        let brandId = this.props.brandId;
        let cost = (event.target.value).split('-');
        let costUrl;
        let lcost = cost[0];
        let hcost = cost[1]
        if(event.target.value === ""){
            costUrl = `${url}/${brandId}`
        }else{
            costUrl = `${url}/${brandId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.productPerCost(res.data)})
    }
    render(){
        return(
            <div class="filter_price filter_margin" onChange={this.filterCost}>
                    <span>Price</span>
                    <div>
                    <label className="radio">
                        <input type="radio" name="price" value=""/>All
                    </label>
                    </div>
                     <div>
                         <input type="radio" name="price"  value="200-700"/>
                         <label><i class="fa-solid fa-indian-rupee-sign"></i>200-700</label>
                     </div>
                     <div>
                        <input type="radio" name="price"  value="700-1200"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>700-1200</label>
                    </div>
                    <div>
                        <input type="radio" name="price"  value="1200-2000"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>1200-2000</label>
                    </div>
                    <div>
                        <input type="radio" name="price"  value="2000-5000"/>
                        <label><i class="fa-solid fa-indian-rupee-sign"></i>2000-5000</label>
                    </div>
                 </div>
        )
    }
}

export default CostFilter