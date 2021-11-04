import { combineReducers } from 'redux';
import todoList from './todo';
// Merge multiple reducers in single reducer object (root reducer)
const rootReducer = combineReducers({
    todoList   
});

export default rootReducer;