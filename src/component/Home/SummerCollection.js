import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './SummerCollection.css'

const summerUrl = "https://shoppinghubapi.herokuapp.com/api/imagecollection?collectionId=7"


class SummerCollection extends Component{
    constructor(props){
        super(props)

        this.state={
            summer_img:[]
        }
    }



    render(){
         console.log(this.state.summer_img)

        return(
            <section class="product_card carousel_margin">
              <div>
               <h2>FRESH SUMMER STYLES TO OWN</h2>
              </div>
             <div class="row">
             
                {
                    this.state.summer_img.map(data => (
                        <div class="col-lg-3 product_image">
                        <Link to={`/listing/${data.brand_id}`} key={data._id}>
                          <img src={data.img} alt="summer collection"/>
                        </Link>
                        </div>
                        
                    ))
                }
             
              </div>
             </section>
        )
    }

    componentDidMount(){
        fetch(summerUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({summer_img:data})
        })
    }
}

export default SummerCollection 
