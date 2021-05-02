import React, {Component} from 'react';

const appContext = React.createContext();

class AppProvider extends Component {
     constructor(props) {
         super(props);

         const token = localStorage.getItem('token');

         this.state = {
             user: null,
             isAuth: token ? true : false,
             setUser: this.setUser,
             login: this.login,
             logout: this.logout
         }
     }

     setUser = (user) => {
        this.setState({user});
     }

     login = (token) => {
        localStorage.setItem('token', token);
        this.setState({isAuth: true});
     }

     logout = () => {
        localStorage.removeItem('token');
        this.setState({isAuth: false});
     }

     render() {
         return (
             <appContext.Provider value={this.state}>
                 {this.props.children}
             </appContext.Provider>
         )
     }

}

export {AppProvider};
export default appContext;
