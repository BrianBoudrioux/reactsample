import { withRouter } from 'react-router-dom';
import Nav from './Nav';

function Header() {
    const showNav = localStorage.getItem('token') ? true : false;
    return (
        <header>
            <h1>Simplonews</h1>
            {showNav && <Nav />}
        </header>
    )
}

export default withRouter(Header);