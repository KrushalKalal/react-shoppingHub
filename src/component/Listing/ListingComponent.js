import React,{Component} from 'react';
import axios from 'axios';
import ColorFilter from './Filter/ColorFilter'
import OccationFilter from './Filter/OccastionFilter';
import ProductList from './ProductList';
import GenderFilter from './Filter/GenderFilter';
import DiscountFilter from './Filter/DiscountFilter';
import CostFilter from './Filter/CostFilter';
import ProductTypeFilter from './Filter/ProductTypeFilter';
import './ProductList.css'
import './Filter.css'

const productList = "https://shoppinghubapi.herokuapp.com/api/productList?brandId="

class ListingComponent extends Component{
    constructor(props){
        super(props)

        this.state={
            products:''
        }
    }
    setDataPerFilter = (data) => {
        this.setState({products:data})
    }

    render(){
        return(
         <>
         <section class="container-fluid listing_content">
             <div class="row">
                 <div class="col-lg-3 filter">
                  <div class="filters">
                     <div class="title">
                       <span>Shopping Hub</span>
                     </div>
                     <GenderFilter brandId={this.props.match.params.brandId}
                     productPerGender={(data) => {this.setDataPerFilter(data)}}
                     />
                     <ProductTypeFilter brandId={this.props.match.params.brandId}
                     productPerCategory={(data) => {this.setDataPerFilter(data)}}
                     />
                     <CostFilter brandId={this.props.match.params.brandId} 
                     productPerCost={(data) => {this.setDataPerFilter(data)}}
                     />
                     <ColorFilter brandId={this.props.match.params.brandId}
                     productPerColor={(data) => {this.setDataPerFilter(data)}}
                     />
                     <OccationFilter brandId={this.props.match.params.brandId}
                     productPerOccation={(data) => {this.setDataPerFilter(data)}}
                     />
                     <DiscountFilter  brandId={this.props.match.params.brandId}
                     productPerDiscount={(data) => {this.setDataPerFilter(data)}}
                     />
                   </div>
                 </div>
                
                 <div class="col-lg-9 content">
                    
                       <ProductList productData={this.state.products}/>
                    
                   
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