import React, { Component } from 'react';

class List extends Component{

    constructor(props){
        super(props);
        this.state={
            num: 0
        }
    }

    render(){
            var view = null;
            if(this.props.completed === 'true'){
                view = <p className="true">{this.props.text}</p>
            }
            else{
                view = <p className="false">{this.props.text}</p>
            }
        
        return(
            <ul>
                <li>
                    <div>{view}</div>
                    <button type="submit" onClick={function(e){
                        this.props.onClickToggleTodo(this.props.id);
                        console.log(this.props.completed);
                        if(this.props.completed==='false'){
                            
                            this.props.onChangeDone(this.props.done+1);
                        }
                        else if(this.props.completed==='true'){
                           
                            this.props.onChangeDone(this.props.done-1);
                        }
                        }.bind(this)}>완료</button> 
                    <button type="submit" onClick={function(e){
                        this.props.onClickDeleteTodo(this.props.text);
                        if(this.props.completed==='true'){
                           
                            this.props.onChangeDone(this.props.done-1);
                        }
                        }.bind(this)}>삭제</button>
                
                </li>
            </ul>

        );
    }
}
export default List;