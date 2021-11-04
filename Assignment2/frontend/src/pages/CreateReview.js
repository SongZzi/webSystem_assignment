import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Form from '../Components/Form';
import request from '../lib/request';

class CreateReview extends Component{
    
    render(){
        return(
            <div className="form">
                <p className="title">Movie Review</p>
                <Form onSubmit={request.createReview}></Form>
            </div>

        );
    }
}

export default CreateReview;