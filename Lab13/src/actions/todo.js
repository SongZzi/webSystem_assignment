export function createTodo(text, todoID) {
    console.log("add"+text+todoID);
    return { 
        type: 'CREATE_TODO',
        id: todoID++,
        text}
};
export function deleteTodo(text) {
    console.log("delete"+text);
    return { 
        type: 'DELETE_TODO',
        text }
};
export function toggleTodo(id) {
    console.log("toggle"+id);
    return { 
        type: 'TOGGLE_TODO',
        id }
};