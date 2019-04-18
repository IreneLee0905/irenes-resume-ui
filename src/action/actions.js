import fetch from 'isomorphic-fetch';
import {CustomerEvents} from '../constant/event';
import WebUtils from "../utils/WebUtils";


export const login = (account, password) => {
  console.log("LOGIN = " + account);
  return function (dispatch) {
    return fetch('http://localhost:8000/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'account=' + account + '&password=' + password
    })
      .then(responsePromise => WebUtils.fetchResponse(responsePromise))
      .then(response => {
        dispatch({
          type: CustomerEvents.CUSTOMER_LOGIN,
          state: response
        });
      });


  };
};

export const addOne = (event, params = {}, url, callback) => {
  return (dispatch) => {
    return fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(params)
    })
      .then(responsePromise => WebUtils.fetchResponse(responsePromise))
      .then(response => {
        dispatch({type: event, state: response});
        if(!!callback){
          callback(response);
        }
      })
  }
};
