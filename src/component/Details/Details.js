import React,{Component} from 'react';
import './Details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ProductUrl= "https://shoppinghub-api.herokuapp.com/details"


class Details extends Component {

    constructor(){
        super()

        this.state={
            details:[],
            brandId:sessionStorage.getItem('brandId')
        }
    }

    render(){
        console.log(this.state.details)
        return(
            <>
               <div id="mainContent">
                {
                    this.state.details.map(data => (
                        <>
                        <div className="imgDiv">
                        <img src={data.img} alt="image"/>
                         </div>
                         <div className="contentDiv">
                        <h2>{data.brands[0].brand_name}</h2>
                        <span>Customers Say 4 </span>
                        <h3><del>Old Price: Rs.1000</del></h3>
                        <h3>New Price: Rs.{data.price}</h3>
                        <h3>{data.description}</h3>
                        <Link to={`/listing/${this.state.brandId}`} className="btn btn-danger">Back</Link> &nbsp;
                        </div>
                        </>
                        
                    ))
                }
               </div>
        
            </>
        )
    }

    async componentDidMount(){
        let productId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${ProductUrl}/${productId}`)
        this.setState({details:response.data})
    }
}

export default Details;