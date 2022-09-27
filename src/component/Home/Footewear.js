import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './SummerCollection.css';

const footwearUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=12"

class Footwear extends Component{
    constructor(props){
        super(props)

        this.state={
            footwear_img:[]
        }
    }



    render(){
         console.log(this.state.footwear_img)

        return(
            <section class="footwear_card carousel_margin">
            <div>
              <h2>FOOTWEAR MEETS FASHION</h2>
            </div>
            <div className='img-carousel'>
            {this.state.footwear_img.length && (
             <OwlCarousel items={3}  
                 className="owl-theme"  
                 loop  
                 dots={false}
                 margin={8} >  
                {
                    this.state.footwear_img.map(data => (
                        <div class="item footwear_image">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="footwear"/>
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
        fetch(footwearUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({footwear_img:data})
        })
    }
}

export default Footwear