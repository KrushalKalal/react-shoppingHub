import React,{Component} from 'react';
import Header from '../../Header';
import './Login.css';

const url = "https://shoppinghubapi.herokuapp.com/api/auth/login";

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            email:'nidhi@gmail.com',
            password:'12345678',
            message:''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push(`/`)
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <hr/>
                 <div className="container">
                    <div class="login_form">
                        <div class="login_heading">
                            Login
                        </div>
                        <div class="login_body">
                            <h3 style={{color:'red'}}>{this.state.message}</h3>
                            <div class="login_input">
                                <label for="email" class="control-label">Email</label>
                                <input class="form-control" id="email" name="email" placeholder="email" value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="login_input">
                                <label for="password" class="control-label">Password</label>
                                <input class="form-control" type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                                onChange={this.handleChange}/>
                            </div>
                            <button className="btn  login_btn" onClick={this.handleSubmit}>Login</button>
                        </div>
                        
                    </div>
                </div> 
            </>
        )
    }
}

export default Login