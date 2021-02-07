import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ShowReview extends Component {
    constructor(props) {
        super(props);

        this.deleteReview = this.deleteReview.bind(this);
        this.likeReview = this.likeReview.bind(this);

        this.state = {
            id : '',
            username: '',
            title: '',
            description: '',
            image: '',
            likes: 0,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/reviews/'+this.props.match.params.id)
          .then(res => {
            // console.log("BEFORE : ",res.data);
            // res.data.description = res.data.description.replace("\n","<br />");
            // console.log("AFTER : ",res.data);
            this.setState({ 
                id : res.data._id,
                username: res.data.username,
                title: res.data.title,
                description: res.data.description,
                image: res.data.image,
                likes: res.data.likes
             });
          })
          .catch((error) => {
            console.log(error);
          })
    }

    likeReview(id) {
        axios.post('http://localhost:5000/reviews/'+id+'/like')
            .then(response => { 
                console.log(response.data);
                this.setState({
                    likes : this.state.likes+1,
                })
            });
    }

    deleteReview(id) {
        axios.delete('http://localhost:5000/reviews/'+id)
          .then(response => { console.log(response.data)});
    
        window.location = '/';
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <img className="w-100 rounded-lg" src={this.state.image}/>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="card bg-dark text-white">
                            <div className="card-body">
                                <h2 className="card-title">{this.state.title} Review</h2>
                                <h6 className="card-subtitle mb-2 text-info">Author : {this.state.username}</h6>
                                <h5><span className="badge badge-primary">{this.state.likes} Likes</span></h5>
                                <p className="card-text" style={{whiteSpace: "pre-line"}}>{this.state.description}</p>
                                <div className="d-flex justify-content-left">
                                    <h4>
                                        <a href="#" className="card-link btn btn-outline-primary mr-3" onClick={() => {this.likeReview(this.state.id)}}>
                                        <i className="bi bi-heart"></i> Like</a>
                                    </h4>
                                    <h4><a href="#" className="card-link btn btn-outline-success mr-3"><i className="bi bi-share"></i> Share</a></h4>
                                    <h4><a href="#" className="card-link btn btn-outline-warning mr-3"><i className="bi bi-bookmark-plus"></i> Bookmark</a></h4>
                                    <div>
                                        <div className="btn-group mr-3">
                                            <button type="button" className="btn btn-outline-danger mr-3 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {/* <i className="bi bi-three-dots"></i> */}
                                                <i className="bi bi-sliders"></i> Option
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item text-warning" to={"/review-edit/"+this.state.id}>Edit</Link>
                                                <a className="dropdown-item text-danger" href="#" onClick = {() => {this.deleteReview(this.state.id)}}>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


            </div>            
        )
    }
}

