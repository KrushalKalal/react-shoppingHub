import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './SummerCollection.css'

const covetedUrl = "https://shoppinghub-api.herokuapp.com/imagecollection?collectionId=8"


class CovetedBrand extends Component{
    constructor(props){
        super(props)

        this.state={
            coveted_img:[]
        }
    }



    render(){
         console.log(this.state.coveted_img)

        return(
            <section class="product_card">
              <div>
               <h2>COVETED BRAND DEALS</h2>
              </div>
             <div class="row">
             
                {
                    this.state.coveted_img.map(data => (
                        <div class="col-lg-3 product_image">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="coveted brand"/>
                        </Link>
                        </div>
                        
                    ))
                }
             
              </div>
             </section>
        )
    }

    componentDidMount(){
        fetch(covetedUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({coveted_img:data})
        })
    }
}

export default CovetedBrand 
