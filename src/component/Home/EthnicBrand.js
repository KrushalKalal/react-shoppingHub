import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './SummerCollection.css'

const ethnicUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=11"


class EthnicBrand extends Component{
    constructor(props){
        super(props)

        this.state={
            ethnic_img:[]
        }
    }



    render(){
         console.log(this.state.ethnic_img)

        return(
            <section class="product_card">
              <div>
               <h2>GRACEFUL ETHNICWEAR</h2>
              </div>
             <div class="row">
             
                {
                    this.state.ethnic_img.map(data => (
                        <div class="col-lg-3 product_image">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="Ethnic Wera"/>
                        </Link>
                        </div>
                        
                    ))
                }
             
              </div>
             </section>
        )
    }

    componentDidMount(){
        fetch(ethnicUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({ethnic_img:data})
        })
    }
}

export default EthnicBrand 
