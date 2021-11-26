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
import AlertState from './context/alerts/alertState';

function App() {
  return (
    <div className="App">
      <AlertState>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/dashboard" exact component={Dashboard}></Route>
            <Route path="/my-meals" exact component={MyMeals}></Route>
            <Route path="/profile" exact component={Profile}></Route>
          </Switch>
        </Router>
      </AlertState>
    </div>
  );
}

export default App;
