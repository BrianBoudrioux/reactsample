import React from 'react';

class RegisterForm extends React.Component {

    render() {
        return (
            <div>
                <input type="text" name="email" />
                <input type="password" name="password" />
                <button>S'inscrire</button>
            </div>
        )
    }
}

export default RegisterForm;