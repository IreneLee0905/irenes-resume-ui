import React, {Component} from 'react';
import './styles/app.css';
import Navigation from './components/Navigation';
import {Provider} from "react-redux";
import {BrowserRouter, Link, Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import {combineReducers, createStore} from 'redux'
import {reducers} from "./reducer/reducers";


const store = createStore(combineReducers({...reducers}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>


        <BrowserRouter>
          <div>
            <Navigation/>
            <Link to={"/aaa"}>aaa</Link>
            <Route path="/aaa" component={LoginPage}/>
          </div>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;