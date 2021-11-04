const initialState = { 
  todos: [],
  id: 0,
  total: 0,
  done: 0, 
  
};

export default function todoList(state = initialState, action){
    switch (action.type) {
        case 'CREATE_TODO':
          return {
            ...state,

            todos: [
              ...state.todos,
              {
                id: action.id,
                text: action.text,
                completed: 'false',
              }
            ],
            id: state.id +1,
            total: state.total +1
          }
          case 'DELETE_TODO':
          return{
            ...state,

            todos: state.todos.filter(todo => todo.text !== action.text) ,

            total: state.total -1

          }
          case 'TOGGLE_TODO':
          return{
            ...state,

            done: state.todos.map(todo => {
              if(todo.id===action.id && todo.completed === 'false'){
               return state.done+1;       
               
              }
              else if(todo.id===action.id && todo.completed === 'true'){
                return state.done-1;
                
              } 
            }),
          
            todos: state.todos.map(todo => {
              if(todo.id === action.id && todo.completed === 'false'){
                return{
                  ...todo,
                  completed: 'true',
                   
                }
              }
              else if(todo.id === action.id && todo.completed === 'true'){
                return{
                  ...todo,
                  completed: 'false',
                }
              }
              return todo
            }
            ),
          }     
        default:
          return state;
      }
}