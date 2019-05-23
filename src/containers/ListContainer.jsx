import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import { editTodo, toggleTodo, deleteTodo } from '../actions';

class ListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.store = this.context.store;

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
            <List 
            todos={todos}
            onDelete={this.handleDelete}
            onToggle={this.handleToggle}
            onEdit={this.handleEdit} />
        )
    }
}

ListContainer.contextTypes = {
    store: PropTypes.object
}

export default ListContainer;