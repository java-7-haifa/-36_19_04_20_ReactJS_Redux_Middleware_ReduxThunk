import React from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contacts from './components/Contacts';



const App = props => {
  let isAuth = true;
  return (
    <>
    <Header isAuth={true}/>
    <div className="container">
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            {!isAuth ? <Route path='/login' render={()=> <Login />}/>:null}
            {isAuth ? <Route path='/contacts' component={Contacts}/> : <Redirect to='/login'/>}
            <Redirect to='/'/>
          </Switch>
        </div>
    </>
  );
}

export default withRouter(App);
 