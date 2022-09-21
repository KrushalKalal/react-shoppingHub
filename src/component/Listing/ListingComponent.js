import React,{Component} from 'react';
import axios from 'axios';
import Filter from './Filter'
import ProductList from './ProductList';
import './ProductList.css'

const productList = "https://shoppinghub-api.herokuapp.com/products?brandId="

class ListingComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            products:''
        }
    }

    render(){
        return(
         <>
         <section class="container-fluid listing_content">
             <div class="row">
                <Filter/>
                 <div class="col-lg-9 content">
                     <div class="row">
                       <ProductList productData={this.state.products}/>
                    </div>
                   
                 </div> 
            </div>
          </section> 
         </> 
           
        )
    }

    componentDidMount(){
        window.scrollTo(0,0)
        let brandId = this.props.match.params.brandId;
        sessionStorage.setItem('brandId',brandId)
        axios.get(`${productList}${brandId}`)
        .then((res) => {this.setState({products:res.data})})
    }
}

export default ListingComponent