import React, {Component} from 'react';
import './styles/app.css';
import Navigation from './components/Navigation';
import {Provider} from "react-redux";
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {BrowserRouter, Link, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Register";
import HomePage from "./components/HomePage";
import ResumePage from "./components/ResumePage";
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
            <div >
              <Route exact path="/" component={HomePage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
              <Route path="/resume" component={ResumePage}/>
            </div>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;