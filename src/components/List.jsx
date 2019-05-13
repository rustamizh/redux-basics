import React from 'react';
import PropTypes from 'prop-types';
import { editTodo, toggleTodo, deleteTodo } from '../actions';

import Todo from './Todo';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    comsponentWillUnmount() {
        this.unsubscribe();
    }

    handleDelete(id) {
        this.store.dispatch(deleteTodo(id));
    }

    handleToggle(id) {
        this.store.dispatch(toggleTodo(id));
    }

    handleEdit(id, title) {
        this.store.dispatch(editTodo(id, title));
    }

    render() {
        const todos = this.store.getState();

        return (
            <section className="todo-list">
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onDelete={this.handleDelete}
                        onToggle={this.handleToggle}
                        onEdit={this.handleEdit}
                    />)
                }
            </section>
        );
    }

}

List.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
};

export default List;