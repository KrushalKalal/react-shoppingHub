import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Home from './component/Home/Home';
import Listing from './component/Listing/ListingComponent';
import Details from './component/Details/Details';
import Cares from './Cares';
import Footer from './Footer';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
               <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listing/:brandId" component={Listing}/>
                <Route exact path="/details" component={Details}/>
                <Cares/>
                <Footer/>
            </div>
            </BrowserRouter>
          
        )
    }
}

export default Routing;