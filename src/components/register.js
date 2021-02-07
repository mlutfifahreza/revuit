import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        console.log(user);     

        axios.post('http://localhost:5000/users/register', user)
            .then(res => console.log(res.data));
        
        window.location = '/review-add'

        this.setState({
            username: "",
            password: ""
        })
    }    

    render(){
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <h1>Register</h1>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group" >
                        <label htmlFor="username" >Username</label>
                        <input type="text" id="username" className="form-control" 
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" className="form-control" 
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                        />
                    </div>
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>

            </div>
        )
    }
}