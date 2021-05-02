import React from 'react';
import {userService} from '../../services';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleClick = async (e) => {
        const {email, password} = this.state;

        try {
            const response = await userService.login(email, password);
            localStorage.setItem('token', response.data.token);
            this.props.history.push('/home');
        } catch(e) {
            this.setState({error: e.message});
        }
    }

    render() {
        return (
        <div>
            {this.state.error && <h6>{this.state.error}</h6>}
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button onClick={this.handleClick}>Se connecter</button>
        </div>
        )
    }
}

export default LoginForm;