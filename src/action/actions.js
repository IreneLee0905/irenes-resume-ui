import fetch from 'isomorphic-fetch';
import {UserEvents} from '../constant/event';

export function addUser(name) {
  console.log(name);
  let state = {
    name: name,
    status: 'login'
  };

  return {state, type: 'ADD_USER'}
}

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
      .then(responsePromise => {
        console.log(responsePromise);
        if(responsePromise.status === 200){
          responsePromise.json().then(jsonResponse => {
            return Promise.resolve(jsonResponse);
          }).then(rs => {
            console.log(rs);
            dispatch({
              type: UserEvents.USER_LOGIN,
              state: rs
            });
          });
        }else{

          //TODO
          dispatch({type:UserEvents.USER_LOGOUT});
        }


      })
  }

};