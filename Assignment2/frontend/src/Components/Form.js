import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Form extends Component{
    constructor(props){
        super(props);

        this.form ={
            movie_name: React.createRef(),
            review_content: React.createRef(),
            rate: React.createRef()
        }
    }

    async submit(){
        //console.log("submit");
        this.props.history.push("/");
        const data = {
            movie_name: this.form.movie_name.current.value,
            review_content: this.form.review_content.current.value,
            rate: this.form.rate.current.value
        }
        const echo_result = await this.props.onSubmit(data);

        //this.props.history.push("/");
    }

    cancel(){
        this.props.history.goBack();
    }
    render(){
        return(
            <div>   
                
                    <div className="box">
                    <span className="a">I'm gonna review </span>
                    <input ref={this.form.movie_name} className="box1" placeholder=" Movie Name"></input></div> <br/>
                    <div className="box"><span className="a">My review is </span>
                    <input ref={this.form.review_content} className="box2" placeholder=" Review"></input></div> <br/>
                    <div className="box"><span className="a">So, I'll give this movie a rating of </span>
                    <input ref={this.form.rate} className="box3" placeholder=" Rating"></input></div><br/>
                    <button className="ok" onClick={this.submit.bind(this)}>OK</button>
                    <button className="cancel" onClick={this.cancel.bind(this)}>Cancel</button>
                    
            </div>

        );
    }
}

export default withRouter(Form);