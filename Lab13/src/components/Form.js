import React, { Component } from 'react';
import { createStore } from 'redux';
import counter from '../reducers';
import { createTodo } from '../actions/todo';
import { connect } from 'react-redux';
import App from '../App';
import TodoList from './TodoList';


class Form extends Component{
 
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            todoID: 0
        }
        
      }

    componentDidMount() {
        this.content = document.querySelector('#content');
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log(this.props.num);
    }

    render(){
      
        return(
            <div>
                <input type="text" id="content" onChange={this.onChange}></input>
                <button type='submit' onClick={()=> this.props.onClickAddTodo(this.state.content, this.props.num)}>OK</button>
            </div>

        );
    }

}
export default Form;