import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);     

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        
        this.setState({
            username: ""
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
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </form>
                </div>

            </div>
        )
    }
}