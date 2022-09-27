import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './SummerCollection.css';

const flatoffUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=6"

class Flatoff extends Component{
    constructor(props){
        super(props)

        this.state={
            flatoff_img:[]
        }
    }



    render(){
         console.log(this.state.flatoff_img)

        return(
            <section class="extra_offer_card carousel_margin">
            <div className='offer-carousel'>
            {this.state.flatoff_img.length && (
             <OwlCarousel items={3}  
                 className="owl-theme"  
                 loop  
                 nav  
                 margin={8} >  
                {
                    this.state.flatoff_img.map(data => (
                        <div class="item offer_image">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="extra off"/>
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
        fetch(flatoffUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({flatoff_img:data})
        })
    }
}

export default Flatoff