import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contacts from './components/Contacts';
import {connect} from 'react-redux';



const App = props => {
  return (
    <>
    <Header isAuth={props.token!==null}/>
    <div className="container">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            {!props.token ? <Route path='/login' render={()=> <Login />}/>:null}
            {props.token ? <Route path='/contacts' component={Contacts}/> : <Redirect to='/login'/>}
            <Redirect to='/'/>
          </Switch>
        </div>
    </>
  );
}

const mapStateToProps = ({appState}) => {
  return {
    token:appState.token
  }
}
export default connect(mapStateToProps)(withRouter(App));
 