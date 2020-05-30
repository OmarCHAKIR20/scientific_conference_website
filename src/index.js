import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import authReducer from "./store/reducers/Auth";
import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise'
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;*/

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware , thunk)(createStore)

const store = createStoreWithMiddleware(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<React.StrictMode>{app}</React.StrictMode>,document.getElementById("root"));

serviceWorker.unregister();
