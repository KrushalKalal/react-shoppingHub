import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './OrderDisplay'

const oUrl = "https://shoppinghubapi.herokuapp.com/api/orderList"

class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
           <>
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }

    componentDidMount(){
        axios.get(`${oUrl}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder;