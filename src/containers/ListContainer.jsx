import List from '../components/List';
import { connect } from 'react-redux';
import { editTodo, toggleTodo, deleteTodo } from '../actions';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onToggle: id => dispatch(toggleTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title))
    };
}

const createContainerFor = connect(mapStateToProps, mapDispatchToProps);

const ListContainer = createContainerFor(List);

export default ListContainer;