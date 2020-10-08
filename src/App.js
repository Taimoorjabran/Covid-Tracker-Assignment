import React from 'react';
import './App.css';
import Auth from './pages/landing/auth';
import DashBoard from './pages/dashBoard/dashBoard';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './utility/privateRoute';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          render={(props) => (<Auth {...props} />)}
        />
        <PrivateRoute exact path="/dashboard" Component={DashBoard} />
        <Route path='*'>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
