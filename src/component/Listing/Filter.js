import React,{Component} from 'react';
import './Filter.css';

class Filter extends Component{
    render(){
        return(
            <div class="col-lg-3 filter">
            <div class="filters">
                   <div class="title">
                       <span>Shopping Hub</span>
                   </div>
                
                   <div class="filter_gender filter_margin">
                       <select id="genders">
                           <option>----SELECT Gender----</option>
                       </select>
                    
                        <div>
                            <input type="checkbox" name="gender"/>
                            <label>Male</label>
                        </div>
                        <div>
                           <input type="checkbox" name="gender"/>
                           <label>Female</label>
                       </div>
                       <div>
                           <input type="checkbox" name="gender"/>
                           <label>Boys</label>
                       </div>
                       <div>
                           <input type="checkbox" name="gender"/>
                           <label>Girls</label>
                       </div> 
                   </div>
                    
                   <div class="filter_category filter_margin">
                       <span>Category</span>
                        <div>
                            <input type="checkbox" name="category"/>
                            <label>Topwear</label>
                        </div>
                        <div>
                           <input type="checkbox" name="category"/>
                           <label>Bottomwear</label>
                       </div>
                       <div>
                           <input type="checkbox" name="category"/>
                           <label>Innerwear</label>
                       </div>
                       <div>
                           <input type="checkbox" name="category"/>
                           <label>Footwear</label>
                       </div>
                    </div>
                    
                   <div class="filter_price filter_margin">
                       <span>Price</span>
                        <div>
                            <input type="radio" name="price"/>
                            <label>Less than <i class="fa-solid fa-indian-rupee-sign"></i> 500</label>
                        </div>
                        <div>
                           <input type="radio" name="price"/>
                           <label><i class="fa-solid fa-indian-rupee-sign"></i> 500 to <i class="fa-solid fa-indian-rupee-sign"></i> 1000</label>
                       </div>
                       <div>
                           <input type="radio" name="price"/>
                           <label><i class="fa-solid fa-indian-rupee-sign"></i> 1000 to <i class="fa-solid fa-indian-rupee-sign"></i> 1500</label>
                       </div>
                       <div>
                           <input type="radio" name="price"/>
                           <label><i class="fa-solid fa-indian-rupee-sign"></i> 1500 to <i class="fa-solid fa-indian-rupee-sign"></i> 2000</label>
                       </div>
                       <div>
                           <input type="radio" name="price"/>
                           <label>More than <i class="fa-solid fa-indian-rupee-sign"></i> 2000</label>
                       </div>
                   </div>
                  
                   <div class="filter_brand filter_margin">
                       <span>Brands</span>
                        <div>
                            <input type="checkbox" name="brand"/>
                            <label>Puma</label>
                        </div>
                        <div>
                           <input type="checkbox" name="brand"/>
                           <label>Levi's</label>
                       </div>
                       <div>
                           <input type="checkbox" name="brand"/>
                           <label>Dillinger</label>
                       </div>
                       <div>
                          <input type="checkbox" name="brand"/>
                          <label>AllenSolly</label>
                      </div>
                      <div>
                       <input type="checkbox" name="brand"/>
                       <label>VanHeusen</label>
                      </div>
                      <a href="#" class="more_color">More</a>
                   </div>
                  
                   <div class="filter_occation filter_margin">
                       <span>Size</span>
                        <div>
                            <input type="checkbox" name="occation"/>
                            <label>Casual</label>
                        </div>
                        <div>
                           <input type="checkbox" name="occation"/>
                           <label>Work</label>
                       </div>
                       <div>
                           <input type="checkbox" name="occation"/>
                           <label>Ethnic</label>
                       </div>
                       <div>
                          <input type="checkbox" name="occation"/>
                          <label>Party</label>
                      </div>
                   </div>
                   
                   <div class="filter_discount filter_margin">
                       <span>Discount</span>
                        <div>
                            <input type="checkbox" name="discount"/>
                            <label>70% or more</label>
                        </div>
                        <div>
                           <input type="checkbox" name="discount"/>
                           <label>60% or more</label>
                       </div>
                       <div>
                           <input type="checkbox" name="discount"/>
                           <label>50% or more</label>
                       </div>
                       <div>
                          <input type="checkbox" name="discount"/>
                          <label>40% or more</label>
                      </div>
                      <div>
                       <input type="checkbox" name="discount"/>
                       <label>30% or more</label>
                      </div>
                   </div>
                  
                   <div class="filter_size filter_margin">
                       <span>Size&Feet</span>
                        <div>
                            <input type="checkbox" name="size"/>
                            <label>S</label>
                        </div>
                        <div>
                           <input type="checkbox" name="size"/>
                           <label>M</label>
                       </div>
                       <div>
                           <input type="checkbox" name="size"/>
                           <label>L</label>
                       </div>
                       <div>
                          <input type="checkbox" name="size"/>
                          <label>XL</label>
                      </div>
                      <div>
                       <input type="checkbox" name="discount"/>
                       <label>XXL</label>
                      </div>
                   </div>
                   <div class="filter_color filter_margin">
                       <span>Color</span>
                        <div>
                            <input type="checkbox" name="color"/>
                            <label>Red</label>
                        </div>
                        <div>
                           <input type="checkbox" name="color"/>
                           <label>Yellow</label>
                       </div>
                       <div>
                           <input type="checkbox" name="color"/>
                           <label>Blue</label>
                       </div>
                       <div>
                          <input type="checkbox" name="color"/>
                          <label>Green</label>
                      </div>
                      <div>
                       <input type="checkbox" name="color"/>
                       <label>Pink</label>
                      </div>
                      <a href="#" class="more_color">More</a>
                   </div>
                   
               </div>
           </div>
        
       
        )
    }
}

export default Filter