import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import { createTodo } from '../actions/todo';
import { deleteTodo } from '../actions/todo';
import { toggleTodo } from '../actions/todo';
import { connect } from 'react-redux';


var num = 0;
class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            done: 0
        }
    }
       

        render(){
        return(
            <div>
                <span>Total: {this.props.total} </span>
                <span>Done: {this.state.done}</span>
                <Form onClickAddTodo={this.props.handleAddTodo} num={this.props.id}
                onChangeDone={function(num){
                    this.setState({
                        done: num
                    });
                    
                }.bind(this)}></Form>
                <div>{this.props.todos && this.props.todos.map(todo => (
                <List 
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed} 
                done={this.state.done}
                onClickDeleteTodo={this.props.handleDeleteTodo}
                onClickToggleTodo={this.props.handleToggleTodo} 
                onChangeDone={function(num){
                    this.setState({
                        done: num
                    });
                   
                }.bind(this)}/>
                ))}</div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return{
        todos: state.todos,
        id: state.id,
        total: state.total,
        done: state.done,
    }

} 

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo: ( text, id ) =>
        dispatch(createTodo( text, id )),
    handleDeleteTodo: text => dispatch(deleteTodo(text)),
    handleToggleTodo: id => dispatch(toggleTodo(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
