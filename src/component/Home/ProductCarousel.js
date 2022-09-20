import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css'

const combineUrl = "https://shoppinghub-api.herokuapp.com/imagecollection?collectionId=4"

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

class ProductCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            combine_img:[]
        }
    }



    render(){
         console.log(this.state.combine_img)

        return(
            <div className='home_header'>
              <Carousel 
                       responsive={responsive}
                       swipeable={true}
                       draggable={false}
                       showDots={true}
                       infinite={true}
                       autoPlay={false}
                       autoPlaySpeed={3000}>
                {
                    this.state.combine_img.map(data => (
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="her_carousel"/>
                        </Link>
                        
                        
                    ))
                }
              </Carousel>
            </div>
        )
    }

    componentDidMount(){
        fetch(combineUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({combine_img:data})
        })
    }
}

export default ProductCarousel