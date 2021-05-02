import {Link, withRouter} from 'react-router-dom';
import {useContext} from 'react';
import appContext from '../../stores'

function Nav(props) {
    const context = useContext(appContext);

    const logout = () => {
        context.logout();
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