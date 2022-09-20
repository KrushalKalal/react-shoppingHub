import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './SummerCollection.css'

const premiumUrl = "https://shoppinghub-api.herokuapp.com/imagecollection?collectionId=9"


class PremiumBrand extends Component{
    constructor(props){
        super(props)

        this.state={
            premium_img:[]
        }
    }



    render(){
         console.log(this.state.premium_img)

        return(
            <section class="premium_brands">
              <div>
               <h2>STUNNING DEALS ON PREMIUM BRANDS</h2>
              </div>
             <div class="row brand_row">
             
                {
                    this.state.premium_img.map(data => (
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xl-12 brand_img">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="premium brand"/>
                        </Link>
                        </div>
                        
                    ))
                }
             
              </div>
             </section>
        )
    }

    componentDidMount(){
        fetch(premiumUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({premium_img:data})
        })
    }
}

export default PremiumBrand 
