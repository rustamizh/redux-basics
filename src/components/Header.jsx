import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    comsponentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const todos = this.props.store.getState();
    
        return (
            <header>
                <Stats todos={todos} />
                <h1>Redux Todo</h1>
                <Stopwatch />
            </header>
        );  
    }

}

Header.propTypes = {
    todos: PropTypes.array.isRequired
};

export default Header;