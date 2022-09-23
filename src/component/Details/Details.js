import React,{Component} from 'react';
import './Details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const ProductUrl= "https://shoppinghubapi.herokuapp.com/api/details"




class Details extends Component {


    constructor(){
        super()

        this.state={
            details:[],
            brandId:sessionStorage.getItem('brandId'),
            userItem:''
        }
    }

    
    productID = []

    placeOrder = (id) => {
        this.productID.push(id);
        this.setState({userItem:this.productID})
    }
    proceed=()=>{
        sessionStorage.setItem('product',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details[0].brands[0].brand_name}`)
    }

    
    render(){
        console.log(this.state.details)
        console.log(this.state.userItem)
       
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
                        <button className="btn btn-success"  onClick={() => {this.placeOrder(data.product_id)}}>Add to Cart</button>
                        <button className="btn btn-success"  onClick={this.proceed}>Proceed</button>
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