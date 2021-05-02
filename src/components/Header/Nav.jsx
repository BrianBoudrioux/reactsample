import {Link, withRouter} from 'react-router-dom';

function Nav(props) {
    const logout = () => {
        localStorage.removeItem('token');
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