import React from 'react';
import {LoginForm, RegisterForm} from '../../components/Forms';

class Login extends React.Component {

    render() {
        return (
            <>
                <LoginForm history={this.props.history} />
                <RegisterForm />
            </>
        )
    }
}

export default Login;