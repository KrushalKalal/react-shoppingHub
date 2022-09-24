import React, {Component} from 'react';
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
            productItem:[]
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let orderId = []
        let obj = this.state;
        obj.productItem = sessionStorage.getItem('product');
        obj.productItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        obj.productItem = orderId
        fetch(orderUrl,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewOrder'))
        .then(console.log('order added'))
    }
    

 

    renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.product_id}>
                        <img src={item.img} alt={item.brands[0].brand_name}/>
                        <h3>{item.brands[0].brand_name}</h3>
                        <h4>Rs. {item.price}</h4>
                    </div>
                )
            })
        }
    }


    render(){
        let productsItem = sessionStorage.getItem('product');
        let orderId = [];
        productsItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        console.log(orderId)
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <div>
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )
        }
        return(
            <>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Employee
                        </div>
                        <div className="panel-body">
                            <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                                <div className="row">
                                   <input type="hidden" name="cost" value={this.state.cost}/>
                                    <input type="hidden" name="order_id" value={this.state.order_id}/>
                                    <input type="hidden" name="productItem" value={this.orderId}/>
                                    
                                    <div className="form-group col-md-6">
                                        <label for="fname" className="control-label">FirstName</label>
                                        <input className="form-control" id="fname" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email" className="control-label">Email</label>
                                        <input className="form-control" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="phone" className="control-label">Phone</label>
                                        <input className="form-control" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="address" className="control-label">Address</label>
                                        <input className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange}/>
                                    </div>
                                </div>
                                {this.renderItem(this.state.productItem)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn btn-success" type='submit' onClick={this.checkout}>PlaceOrder</button>
                                
                            </form>
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