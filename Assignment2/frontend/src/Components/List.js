import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReviewCard from './ReviewCard';

class List extends Component{
    constructor(props){
        super(props);

        this.state ={
            reviews: this.props.data
        }
    }
    
    render(){
        var li = null;
        if(this.state.reviews.length !== 0){ 
           li = this.state.reviews.map(r => 
            <ReviewCard key={r._id} 
                review={r}
                id={r._id}
                rate={r.rate}
                movie_name={r.movie_name}
                review_content={r.review_content}
                onDelete={function deleteReviewById(id){
                    //console.log("id:"+id);
                    this.setState({
                        reviews: this.state.reviews.filter(r => r._id !== id)
                    })
                    
                }.bind(this)}></ReviewCard>
        )
        }
        return(
            <div>
               {li}
            </div>

        );
    }
}

export default List;