import React,{Component} from 'react';
import axios from 'axios';

const url = "https://shoppinghubapi.herokuapp.com/api/filter"

class GenderFilter extends Component{

    filterGender = (event) => {
        let brandId = this.props.brandId;
        let genderId  = event.target.value;
        let genderUrl;
        if(genderUrl === ""){
            genderUrl = `${url}/${brandId}`
        }else{
            genderUrl = `${url}/${brandId}?genderId =${genderId }`
        }
        axios.get(genderUrl)
        .then((res) => {this.props.productPerGender(res.data)})
    }
    render(){
        return(
            
            <div class="filter_gender filter_margin" onChange={this.filterGender}>
                <span>Gender</span>
                <div>
                    <label className="radio">
                        <input type="radio" name="gender" value=""/>All
                    </label>
                    </div>
                <div>
                        <input type="radio" name="gender" value="1"/>
                        <label>Male</label>
                </div>
                <div>
                        <input type="radio" name="gender" value="2"/>
                        <label>Female</label>
                </div>
                <div>
                        <input type="radio" name="gender" value="3"/>
                        <label>Kids</label>
                </div>
           </div>
        
        )
    }
}

export default GenderFilter