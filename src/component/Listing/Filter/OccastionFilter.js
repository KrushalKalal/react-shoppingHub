import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class OccationFilter extends Component{
    filterOccation = (event) => {
        let brandId = this.props.brandId;
        let occasionId  = event.target.value;
        let occationUrl;
        if(occationUrl === ""){
            occationUrl = `${url}/${brandId}`
        }else{
            occationUrl = `${url}/${brandId}?occasionId=${occasionId}`
        }
        axios.get(occationUrl)
        .then((res) => {this.props.productPerOccation(res.data)})
    }
    render(){
        return(
            
            <div class="filter_occation filter_margin" onChange={this.filterOccation}>
                <span>Occation</span>
                <div>
                    <label className="radio">
                        <input type="radio" name="occation" value=""/>All
                    </label>
                    </div>
                <div>
                        <input type="radio" name="occation" value="1"/>
                        <label>Casual</label>
                </div>
                <div>
                        <input type="radio" name="occation" value="2"/>
                        <label>Work</label>
                </div>
                <div>
                        <input type="radio" name="occation" value="3"/>
                        <label>Ethnic</label>
                </div>
                <div>
                        <input type="radio" name="occation" value="4"/>
                        <label>Party</label>
                </div>
           </div>
        
        )
    }
}

export default OccationFilter