import React, { Component } from 'react';
import { Link } from "react-router-dom";
import request from '../lib/request';
import { stars } from '../lib/star';

class ReviewCard extends Component{
    constructor(props){
        super(props);

        this.deleteReview = this.deleteReview.bind(this)
    }

    async deleteReview(){
        const echo_result = await request.deleteReview(this.props.id);
        this.props.onDelete(this.props.id);
    }
  
    render(){
        const { review } = this.props;
        var star = null;
        star= stars(review.rate);
        
        return(
            <ul className="cont">
            <li className="ct" key={review.id}>
               <div className="star">Rate({star})</div>
               <p className="name">{review.movie_name}</p>
               <p className="content">{review.review_content}</p>
               <button className="delete" onClick={this.deleteReview}>delete</button>
            </li>
            </ul>

        );
    }
}

export default ReviewCard;