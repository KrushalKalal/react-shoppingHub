import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const walletUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=14"

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

class WalletCarousel extends Component{
    constructor(props){
        super(props)

        this.state={
            wallet_img:[]
        }
    }



    render(){
         console.log(this.state.wallet_img)

        return(
            <div>
              <Carousel 
                       responsive={responsive}
                       swipeable={true}
                       draggable={false}
                       showDots={true}
                       infinite={true}
                       autoPlay={false}
                       autoPlaySpeed={3000}>
                {
                    this.state.wallet_img.map(data => (
                          <img src={data.img} alt="discount_carousel"/>
                       ))
                }
              </Carousel>
            </div>
        )
    }

    componentDidMount(){
        fetch(walletUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({wallet_img:data})
        })
    }
}

export default WalletCarousel