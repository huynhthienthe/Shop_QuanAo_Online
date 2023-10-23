import React from 'react';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
       <App /> 
    </Router>
      </PersistGate>
    </Provider>,
  document.getElementById("root")
);
