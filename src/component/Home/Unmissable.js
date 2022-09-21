import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './SummerCollection.css';

const unmissableUrl = "https://shoppinghub-api.herokuapp.com/imagecollection?collectionId=10"

class Unmissable extends Component{
    constructor(props){
        super(props)

        this.state={
            unmissable_img:[]
        }
    }



    render(){
         console.log(this.state.unmissable_img)

        return(
            <section class="product_card">
            <div>
              <h2>UNMISSABLE BRANDS THIS SEASON</h2>
            </div>
            <div className='offer-carousel'>
            {this.state.unmissable_img.length && (
             <OwlCarousel items={3}  
                 className="owl-theme"  
                 loop  
                 nav  
                 margin={8} >  
                {
                    this.state.unmissable_img.map(data => (
                        <div class="item product_image_unmissable">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="unmissable brand"/>
                        </Link>
                        </div>
                        
                    ))
                }
              </OwlCarousel>
              )}
              </div>
            </section>
        )
    }

    componentDidMount(){
        fetch(unmissableUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({unmissable_img:data})
        })
    }
}

export default Unmissable