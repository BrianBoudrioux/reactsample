import {Link, withRouter} from 'react-router-dom';
import React from 'react';
import appContext from '../../../store';

function Nav(props) {

    const store = React.useContext(appContext);

    const logout = () => {
        localStorage.removeItem('token');
        store.setAuth(false);
        props.history.push('/');
    }

    return (
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><button onClick={logout}>Deconnexion</button></li>
        </ul>
    )
}

export default withRouter(Nav);