import React from 'react';
import '../src/assets/styles/index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Importing Pages
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import MyMeals from './pages/MyMeals.js';
import Dashboard from './pages/Dashboard.js';
import Profile from './pages/Profile.js';
import Page404 from './pages/404.js';

//Global States
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';

//Token
import tokenAuth from './config/tokenAuth';
import PrivateRoute from './routes/PivateRoute';

//Validate Token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <div className="App">
      <AlertState>
        <AuthState>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/register" exact component={Register}></Route>
              <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
              <PrivateRoute path="/my-meals" exact component={MyMeals}></PrivateRoute>
              <PrivateRoute path="/profile" exact component={Profile}></PrivateRoute>
              <Route component={Page404}></Route>
            </Switch>
          </Router>
        </AuthState>
      </AlertState>
    </div>
  );
}

export default App;
