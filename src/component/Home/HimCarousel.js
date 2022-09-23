import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css'

const himUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=3"

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

class HimCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            him_img:[]
        }
    }



    render(){
         console.log(this.state.him_img)

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
                    this.state.him_img.map(data => (
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
        fetch(himUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({him_img:data})
        })
    }
}

export default HimCarousel