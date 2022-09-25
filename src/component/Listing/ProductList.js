import React from 'react';
import {Link} from 'react-router-dom'

const ProductList = (props) => {
    const listProduct  = ({productData}) => {
        if(productData){
            console.log(productData)
            if(productData.length>0){
                return productData.map((item) => {
                    return(
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product_list_img" key={item._id}>
                         <Link to={`/details?productid=${item.product_id}`}>
                            <img src={item.img} alt={item.restaurant_name}/>
                             <div class="product_desc">
                               <div class="brand_name">{item.brands[0].brand_name}</div>
                                 <div class="product_about">{item.decription}</div>
                                     <div class="product_price">
                                         <span class="pricing"><i class="fa-solid fa-indian-rupee-sign"></i></span>
                                         <s>2,999</s>
                                         <span class="price_discount">{item.discount[0].discount_type}</span>
                                    </div>

                                     <div class="offer_price">Offer Price <i class="fa-solid fa-indian-rupee-sign"></i>{item.price}</div>
                                  </div>
                      </Link>
                       
                    </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data As Per Filter</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="https://i.ibb.co/Y24CWWZ/loader.gif" alt="loader"/>
                    <h2>Loading.....</h2>
                </div>
            )
        }
    }
    return(
        <div class="row">
            {listProduct(props)}
         </div>
    )
}

export default ProductList