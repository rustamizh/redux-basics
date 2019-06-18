import { combineReducers } from 'redux'; 

import { default as filterReducer } from './filter';
import { default as todoReducer } from './todo';
import  * as fromTodos  from './todo';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default reducer;

export function getFilteredTodos(state) {
    return fromTodos.getFilteredTodos(state.todos, state.filter);
}