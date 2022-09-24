import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import ListingComponent from './component/Listing/ListingComponent';
import './Header.css';

const url = "https://shoppinghubapi.herokuapp.com/api/auth/userInfo"


class Header extends Component{

  constructor(props){
    super(props)

    this.state={
        userData:'',
        username:'',
        userImg:''
    }
}

handleLogout = () => {
    sessionStorage.removeItem('ltk')
    sessionStorage.removeItem('userInfo')
    sessionStorage.setItem('loginStatus','LoggedOut')
    this.setState({userData: '' })
    this.props.history.push('/')

}


conditionalHeader = () => {
    if(this.state.userData.name){
        let data = this.state.userData;
        let outputArray = [data.name,data.email,data.phone];
        sessionStorage.setItem('userInfo',outputArray);
        sessionStorage.setItem('loginStatus','LoggedIn')
        return(
            <>
               <li><Link className="btn" to="/logIn">Hi {data.name}</Link></li>
                <button className="btn btn-danger" onClick={this.handleLogout}>
                    <span className="glyphicon glyphicon-log-out"></span>  Logout   
                </button> 
            </>
        )

    }else{
        return(
            <>
                <li><Link className="btn" to="/logIn">Log in</Link></li>
                <li><Link className="btn" to="/Register">Sign up</Link></li>
            </>
        )
    }
}

  
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
                         {this.conditionalHeader()}
                     </ul>
 
                    
                    
                   </div>
                </div>
            </nav>
         </section>
        )
    }
    componentDidMount(){
        
      fetch(url,{
          method: 'GET',
          headers:{
              'x-access-token':sessionStorage.getItem('ltk')
          }
      })
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              userData:data
          })
      })
  }
  
}

export default Header