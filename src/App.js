import './assets/App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Article from './pages/Article';
import {Header} from './pages/partials/Header';
import appContext from './store';
import React from 'react';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const store = React.useContext(appContext);
  return (
    <Route {...rest} render={(props) => (
      store.isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
    )} />
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute path='/article/:id' component={Article} />
      </Switch>
    </Router>
  )
}

export default App;
