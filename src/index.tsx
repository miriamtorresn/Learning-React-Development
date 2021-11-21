import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import initialState from './redux/initialState';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
