import React, { Component } from 'react';
import { Link } from "react-router-dom";
import List from '../Components/List';
import request from '../lib/request';

class Review extends Component{
    constructor(props){
        super(props);

        this.state={
            reviews: []
        }
    }
    async componentDidMount(){

        const data = await request.getReviews();
        console.log(data);
        this.setState({
            reviews : data
        });
        console.log(this.state.reviews);

    }
    render(){
        var result = null;
        if(this.state.reviews.length === 0){
            result = null;
        }
        else{
            result = <List data={this.state.reviews}></List>
        }
        return(
            <div>
                <p className="title">Review List</p>
                {result}
            </div>

        );
    }
}

export default Review;