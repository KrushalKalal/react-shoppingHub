import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class ColorFilter extends Component{

    filterColor = (event) => {
        let brandId = this.props.brandId;
        let colorId = event.target.value;
        let colorUrl;
        if(colorUrl === ""){
            colorUrl = `${url}/${brandId}`
        }else{
            colorUrl = `${url}/${brandId}?colorId=${colorId}`
        }
        axios.get(colorUrl)
        .then((res) => {this.props.productPerColor(res.data)})
    }
    render(){
        return(
            
                <div class="filter_color  filter_margin" onChange={this.filterColor}>
                    <span>Color</span>
                    <div>
                    <label className="radio">
                        <input type="radio" name="color" value=""/>All
                    </label>
                    </div>
                    <div>
                            <input type="radio" name="color" value="1"/>
                            <label>Black</label>
                    </div>
                    <div>
                            <input type="radio" name="color" value="2"/>
                            <label>White</label>
                    </div>
                    <div>
                            <input type="radio" name="color" value="3"/>
                            <label>Blue</label>
                    </div>
                    <div>
                            <input type="radio" name="color" value="4"/>
                            <label>Red</label>
                    </div>
                    <div>
                            <input type="radio" name="color" value="5"/>
                            <label>Pink</label>
                    </div>
               </div>
            
        )
    }
}

export default ColorFilter