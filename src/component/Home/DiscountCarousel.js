import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const discountUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=13"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class DiscountCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            discount_img:[]
        }
    }



    render(){
         console.log(this.state.discount_img)

        return(
            <div className='carousel_margin'>
              <Carousel 
                       responsive={responsive}
                       swipeable={true}
                       draggable={false}
                       showDots={true}
                       infinite={true}
                       autoPlay={false}
                       autoPlaySpeed={3000}>
                {
                    this.state.discount_img.map(data => (
                        <div className="carousel_img">
                          <img src={data.img} alt="discount_carousel"/>
                        </div>  
                       ))
                }
              </Carousel>
            </div>
        )
    }

    componentDidMount(){
        fetch(discountUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({discount_img:data})
        })
    }
}

export default DiscountCarousel