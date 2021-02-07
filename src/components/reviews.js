import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Review = props => (
    <div className="col-xl-4 col-md-6">
        <div className="review col-12 bg-dark text-white rounded-lg pt-3 pb-1 mb-3">
            <h4 className="mb-0">{props.review.title}</h4>
            <p className="text-info mb-1">user : {props.review.username}</p>
            <img src={props.review.image} className="w-100 mb-2 rounded-lg"/>
            <h5><span className="badge badge-primary"><i className="bi bi-heart-fill"></i> {props.review.likes} </span></h5>
            <p>{props.review.description.substring(0,100)} ...</p>
            <Link className="btn btn-outline-success w-100 mb-3" to={"/review-show/"+props.review._id}>See More</Link>
            
        </div>
    </div>
)

export default class ReviewsList extends Component {
    constructor(props) {
        super(props);

        this.deleteReview = this.deleteReview.bind(this)

        this.state = {reviews: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/reviews/')
          .then(response => {
            this.setState({ reviews: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    deleteReview(id) {
        axios.delete('http://localhost:5000/reviews/'+id)
            .then(res => {console.log(res.data)});
        this.setState({reviews : this.state.reviews.filter(el => el._id !== id)})
    }

    reviewList() {
        return this.state.reviews.map(review => {
          return <Review review={review} key={review._id} deleteReview={this.deleteReview}/>;
        })
    }

    render(){
        return(
            <div>
                <h1>All Reviews</h1>
                <div className="row">
                    {this.reviewList()}
                </div>
            </div>
        )
    }
}
