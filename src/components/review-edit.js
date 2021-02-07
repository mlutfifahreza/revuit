import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class EditReview extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeLikes = this.onChangeLikes.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id : '',
            username: '',
            title: '',
            description: '',
            image: '',
            likes: 0,
            date: new Date(),
            users: []
          }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/reviews/'+this.props.match.params.id)
            .then(res => {
                this.setState({ 
                    id : res.data._id,
                    username: res.data.username,
                    title: res.data.title,
                    description: res.data.description,
                    image: res.data.image,
                    likes: res.data.likes
                })
                // console.log("hey");
                // for (let i = 0; i < this.state.description.length; i++) {
                //     console.log(this.state.description.charAt(i));
                // }
            })
            .catch((error) => {
            console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username)
                })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }

    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
    }

    onChangeImage(e) {
        this.setState({
          image: e.target.value
        })
    }

    onChangeLikes(e) {
        this.setState({
          likes: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
          date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const review = {
            username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            likes: this.state.likes,
            date: this.state.date
        }

        console.log(review);

        axios.post('http://localhost:5000/reviews/update/'+this.state.id, review)
            .then(res => console.log(res.data));
        
        window.location = '/review-show/'+this.state.id;
    }

    render(){
        return(
            <div className="row">
                <div className = "col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <h1>Edit Review</h1>
                    <form onSubmit={this.onSubmit} >
                        {/* Date */}
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <div className="form-control" id="title">
                                <DatePicker selected={this.state.date} onChange={date => this.onChangeDate(date)} id="date"/>
                            </div>
                        </div>
                        {/* Username */}
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <select className = "form-control" id = "username" value = {this.state.username} onChange = {this.onChangeUsername}>
                                {
                                    this.state.users.map(function(user) {
                                        return <option key={user} value={user}>{user}</option>;
                                    })
                                }
                            </select>
                        </div>
                        {/* Title */}
                        <div className="form-group">
                            <label htmlFor="title">Review Title</label>
                            <input type="text" className="form-control" id="title"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        {/* Description */}
                        <div className="form-group">
                            <label htmlFor="description">Your Review</label>
                            <textarea className="form-control" id="description" rows="3"
                                value = {this.state.description}
                                onChange = {this.onChangeDescription}
                            ></textarea>
                        </div>
                        {/* Image */}
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input type="text" className="form-control" id="image"
                                value = {this.state.image}
                                onChange = {this.onChangeImage}
                            />
                        </div>
                        {/* Likes */}
                        <div className="form-group">
                            <label htmlFor="likes">Total Likes</label>
                            <input type="number" className="form-control" id="likes"
                                value = {this.state.likes}
                                onChange = {this.onChangeLikes}
                            />
                        </div>
                        {/* Submit */}
                        <div className="form-group d-flex flex-column align-items-center">
                            <input type="submit" value="Submit" className="btn btn-primary w-100" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}