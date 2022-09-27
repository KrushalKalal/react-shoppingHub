import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Home.css'

const mainUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=1"

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

class MainCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            main_img:[]
        }
    }



    render(){
         console.log(this.state.main_img)

        return(
            <div className='home_header carousel_margin'>
              <Carousel 
                       responsive={responsive}
                       swipeable={true}
                       draggable={false}
                       showDots={true}
                       infinite={true}
                       autoPlay={false}
                       autoPlaySpeed={3000}>
                {
                    this.state.main_img.map(data => (
                        <Link to={`/listing/${data.brand_id}`} key={data._id} className="carousel_img">
                          <img src={data.img} alt="main_carousel" className="carousel_img"/>
                        </Link>
                        
                        
                    ))
                }
              </Carousel>
            </div>
        )
    }

    componentDidMount(){
        fetch(mainUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({main_img:data})
        })
    }
}

export default MainCarousel