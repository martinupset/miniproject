import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Login from './pages/Login/LoginContainer'
import Register from './pages/Register/RegisterContainer'
import Dashboard from './pages/Dashboard/DashboardContainer'
import PrivateRoute from './component/PrivateRoute'
import 'antd/dist/antd.css'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return{
    shared: state.shared
  }
}

function App(props) {
  return (
    <Router>
      <div>

        <Route path = '/' exact render = {()=><Redirect to = '/login'/>}/>
          <PrivateRoute path = '/dashboard' auth = {props.shared.auth.isAuthenticated} component = {Dashboard}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/register' component = {Register}/>

      </div>
      </Router>
  );
}

export default connect(mapStateToProps)(App);
