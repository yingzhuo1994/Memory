import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import App from "./App";
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const container = document.getElementById('root');

// Create a root
const root = ReactDOMClient.createRoot(container);

root.render(  <Provider store={store}>
  <App />
</Provider>);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
