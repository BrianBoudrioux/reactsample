import { withRouter } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import appContext from '../../../store';

function Header() {
    const store = React.useContext(appContext);
    return (
        <header>
            <h1>Simplonews</h1>
            {store.isAuth && <Nav />}
        </header>
    )
}

export default withRouter(Header);