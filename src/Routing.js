import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Home from './component/Home/Home';
import Cares from './Cares';
import Footer from './Footer';

class Routing extends Component{
    render(){
        return(
            <BrowserRouter>
               <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Cares/>
                <Footer/>
            </div>
            </BrowserRouter>
          
        )
    }
}

export default Routing;