import React, {Component} from 'react';
import './styles/app.css';
import Navigation from './components/Navigation';
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {BrowserRouter, Link, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register";
import {combineReducers, createStore,applyMiddleware} from 'redux'
import {reducers} from "./reducer/reducers";
import AppContextProvider from './provider/AppContextProvider';


const store = createStore(combineReducers({...reducers}),
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);
AppContextProvider.setStore(store);
class App extends Component {
  render() {

    return (
      <Provider store={store}>


        <BrowserRouter>
          <div>
            <Navigation/>
            <div className="container">
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;