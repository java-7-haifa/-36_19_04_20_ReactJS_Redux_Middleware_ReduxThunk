import {combineReducers} from 'redux';
import loginPageReducer from './login-page.reducer';
import appReducer from './app.reducer';

export default combineReducers({
    loginPage:loginPageReducer,
    appState: appReducer
});