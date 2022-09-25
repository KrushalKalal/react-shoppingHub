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
               <div >
                {
                    this.state.details.map(data => (
                        <>
                        <div className="deatails_container">
                        <div className="row details_content">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 details_images">
                        <img src={data.img} alt="image"/>
                         </div>
                         <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 details_data">
                        <div className='brand_details'>{data.brands[0].brand_name}</div>
                        <div className='description_details'>{data.decription}</div>
                        <div className='price_details'><i class="fa-solid fa-indian-rupee-sign"></i>{data.price} </div>
                        <div className='discount_details'>({data.discount[0].discount_type}) on price</div>
                        <div className='color_details'>Color : {data.color[0].color_name}</div>
                        <div className='size_details'>Size : {data.size[0].size_type}</div>
                        <div><button className="btn cart_btn"  onClick={() => {this.placeOrder(data.product_id)}}>Add to Cart</button></div>
                        <div><button className="btn proceed_btn"  onClick={this.proceed}>Proceed</button>
                         <Link to={`/listing/${this.state.brandId}`} className="btn back_btn">Back</Link>
                         </div>
                         <div className='about_brand'>{data.brands[0].brand_name} {data.about}</div>
                        
                       
                        </div>
                        </div>
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