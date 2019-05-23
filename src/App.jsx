import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App (props){
    const store = props.store;

    return (
        <main>
            <HeaderContainer />

            <ListContainer/>

            <FormContainer />
        </main>
    );
}

export default App;
