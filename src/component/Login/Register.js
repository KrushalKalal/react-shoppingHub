import React,{Component} from 'react';
import Header from '../../Header';
import './Login.css';

const url = "https://shoppinghubapi.herokuapp.com/api/auth/register";

class Register extends Component{

    constructor(props){
        super(props)

        this.state={
            name:'Amit',
            email:'amit@gmail.com',
            password:0,
            phone:567903423
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
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
                <Header/>
                <hr/>
                  <div className="container">
                    <div class="register_form">
                        <div class="register_heading">
                            Register
                        </div>
                        <div class="login_body-body">
                            <div class="login_input">
                                <label for="fname" class="control-label">Name</label>
                                <input class="form-control" id="fname" name="name" placeholder="First Name" value={this.state.name}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="login_input">
                                <label for="email" class="control-label">Email</label>
                                <input class="form-control" id="email" name="email" placeholder="email" value={this.state.email}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="login_input">
                                <label for="password" type="password" class="control-label">Password</label>
                                <input class="form-control" type="password" id="password" name="password" placeholder="Password" value={this.state.password}
                                onChange={this.handleChange}/>
                            </div>
                            <div class="login_input">
                                <label for="phone" class="control-label">Phone</label>
                                <input class="form-control" id="phone" name="phone" placeholder="phone" value={this.state.phone}
                                onChange={this.handleChange}/>
                            </div>
                            <button className="btn login_btn" onClick={this.handleSubmit}>Register</button>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Register