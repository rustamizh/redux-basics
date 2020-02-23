import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const GET_TODOS = 'GET_TODOS';
export const REQUEST_TODOS = 'REQUEST_TODOS';

let nextId = 5;

export function requestTodos() {
    return {
        type: REQUEST_TODOS
    };
}

export function getTodos() {
    return dispatch => {
        dispatch({
            type: REQUEST_TODOS
        });
    
        return axios.get('api/todos')
            .then(response => response.data)
            .then(todos => dispatch({
                    type: GET_TODOS,
                    todos: todos
                }));
    };
}

export function addTodo(title) {
    return axios.post('api/todos', {title: title})
            .then(response => response.data)
            .then(todo => ({
                type: ADD_TODO,
                todo: todo
            }));
}

export function deleteTodo(id) {
    return axios.delete(`api/todos/${id}`)
        .then(response => ({
                type: DELETE_TODO,
                id
            }));
}

export function toggleTodo(id) {
    return axios.patch(`api/todos/${id}`)
        .then(response => response.data)
        .then(todo => ({
            type: TOGGLE_TODO,
            todo: todo
        })); 
}

export function editTodo(id, title) {
    return axios.put(`api/todos/${id}`, {title: title})
        .then(response => response.data)
        .then(todo => ({
            type: ADD_TODO,
            todo: todo
        })); 
}