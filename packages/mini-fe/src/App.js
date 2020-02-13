import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Login from './pages/Login/LoginContainer'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import 'antd/dist/antd.css'



function App() {
  return (
    <Router>
      <div>

        <Route path = '/' exact render = {()=><Redirect to = '/login'/>}/>
          <Route path = '/dashboard' component = {Dashboard}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/register' component = {Register}/>

      </div>
      </Router>
  );
}

export default App;
