import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import rootReducer from "./redux/reducers/root.reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

// const appStore = createStore(rootReducer, applyMiddleware(thunk));
const appStore = createStore(rootReducer, enhancer);

const app = (
  <Provider store={appStore}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// import Counter from "./counter/Counter";
// import counterReducer from "./counter/counterReducer";

// function logger(store){
//   return function(dispatch){
//     return function(action){
//       console.log(store.getState());
//       console.log(action);
//       // return dispatch({type:'INC'});
//       return dispatch(action);
//     }
//   }
// }

// const counterStore = createStore(counterReducer,applyMiddleware(logger,thunk));

// const counter = (
//   <Provider store={counterStore}>
//     <Counter />
//   </Provider>
// );
