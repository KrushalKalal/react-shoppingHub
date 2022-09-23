import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ListingComponent from './component/Listing/ListingComponent';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <section class="navbar_section">
             <nav class="navbar fixed-top navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link to="/"> <img src="https://i.ibb.co/tz8QwvS/hublogo.png" alt="logo"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarContent">
                     <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                       <li class="nav-item">
                         <a class="nav-link" aria-current="page" href="#">Men</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" href="#">Women</a>
                       </li>
                       <li class="nav-item">
                         <a class="nav-link" href="#">kids</a>
                       </li>
                     </ul>
                     <form>
                         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <i class="fas fa-search  postion_search"></i>
                     </form>
                     <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                         <li class="nav-item">
                             <a class="nav-link" href="#"><i class="fa fa-heart"></i></a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link" href="#"><i class="fa fa-shopping-cart"></i></a>
                        </li>
                     </ul>
                     <ul class="navbar-nav">
                       <li class="nav-item">
                         <span id="location_name"></span>
                       </li>
                   </ul>
 
                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                         <li class="nav-item">
                             <a class="nav-link" href="#">Sign In/ Join Us</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link" href="#">Customer Care</a>
                         </li>
                     </ul>
 
                     <ul class="navbar-nav">
                       <li class="nav-item">
                         <i class="fa-solid fa-lightbulb theme"></i>
                       </li>
                   </ul>
                    
                   </div>
                </div>
            </nav>
         </section>
        )
    }
}

export default Header