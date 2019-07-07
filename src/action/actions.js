import fetch from 'isomorphic-fetch';
import {CustomerEvents} from '../constant/event';
import WebUtils from "../utils/WebUtils";
import HttpStatus from "../utils/HttpStatus";
import {MessageEvent} from "../constant/event";

export const login = (account, password) => {
  console.log("LOGIN = " + account);
  return function (dispatch) {
    return fetch(WebUtils.url("/login"), {
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
        if (response.status === HttpStatus.OK) {
          dispatch({
            type: CustomerEvents.CUSTOMER_LOGIN,
            state: response
          });
          dispatch(closeAlert());
        } else {
          dispatch(showAlert("password or account is incorrect..", 'danger'));
        }

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
        if (!!callback) {
          callback(response);
        }
      })
  }
};

export const showAlert = (message, type) => {
  return {
    type: MessageEvent.SHOW_MESSAGE,
    message: message,
    msgType: type
  }
};
export const closeAlert = () => {
  return {
    type: MessageEvent.RESET_MESSAGE
  }
};