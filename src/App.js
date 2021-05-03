import './assets/App.scss';
import Login from './pages/Login';
import Home from './pages/Home';
import Article from './pages/Article';
import {Header} from './pages/partials/Header';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route path='/article/:id' component={Article} />
      </Switch>
    </Router>
  )
}

export default App;
