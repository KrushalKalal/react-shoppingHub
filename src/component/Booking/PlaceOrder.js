import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './PlaceOrder.css';

const url = "https://shoppinghubapi.herokuapp.com/api/productItem";
const orderUrl = "https://shoppinghubapi.herokuapp.com/api/placeOrder"

class PlaceOrder extends Component{

    

    constructor(props){
        super(props)

        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        this.state={
            order_id:Math.floor(Math.random()*10000),
            name:sessionData?sessionData[0]:'',
            email:sessionData?sessionData[1]:'',
            cost:0,
            phone:sessionData?sessionData[2]:'',
            address:'IT 98 Delhi',
            productItem:'',
            productId:sessionStorage.getItem('productId')
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.productItem = sessionStorage.getItem('product');
        console.log(obj.productItem)
        fetch(orderUrl,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(this.props.history.push('/viewOrder'))
        //.then(console.log('order added'))
    }
    
     renderDetails = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 orderDetails" key={item.product_id}>
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 order_card">
                                <img src={item.img} alt={item.brands[0].brand_name}/>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 order_desc">
                                <h3>{item.brands[0].brand_name}'s {item.decription} ({item.color[0].color_name})</h3>
                                <h3>Seller : RetailNet</h3>
                                <h4>Rs. {item.price} ({item.discount[0].discount_type})</h4>
                                <Link to={`/details?productId=${this.state.productId}`} className='btn btn-danger'>Back</Link>
                            </div>
                          </div>
                    </div>
                )
            })
        }
     }

    render(){
        console.log(this.state.productId)
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <div className='login_display'>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )
        }
        return(

            <>
                <div className="order_cart">
                    <div className="row">
                        {this.renderDetails(this.state.productItem)}
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 order_cost">
                    <div className="order_cost_card">
                        <div className="order_heading">
                            User Info
                        </div>
                        <div className="order_body">
                            <form>
                                <div className="row">
                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label for="fname" className="control-label">FirstName</label>
                                        <input className="form-control" id="fname" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label for="email" className="control-label">Email</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label for="phone" className="control-label">Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <label for="address" className="control-label">Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 cost_detail">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn order_btn"  onClick={this.checkout}>PlaceOrder</button>
                                
                            </form>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </>
            
        )
    }

    componentDidMount(){
        let productsItem = sessionStorage.getItem('product');
        let orderId = [];
        productsItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"id" : orderId})
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice =0;
            data.map((item) => {
                totalPrice = totalPrice + parseFloat(item.price);
              
            })
            this.setState({productItem:data,cost:totalPrice})
        })
    }
}

export default PlaceOrder;