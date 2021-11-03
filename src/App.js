import React from 'react';
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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
