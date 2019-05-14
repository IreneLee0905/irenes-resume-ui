// import {ADD_USER} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider"
import HttpStatus from "../utils/HttpStatus";
import {showAlert} from "../action/actions";

const customer = (state = {name: '', status: ''}, action) => {
  console.log(state);


  switch (action.type) {
    case 'ADD_CUSTOMER':
      return Object.assign({}, state, action.state.data);
    case 'CUSTOMER_LOGIN':
      let status = action.state.status;
      if (HttpStatus.OK === status) {
        //set login security object
        AppContextProvider.setSecurity(action.state.data);
        console.log(AppContextProvider.getSecurity());
        return Object.assign({}, state, {...action.state.data});
      } else {
        return Object.assign({
          id: '',
          account: '',
          password: '',
          name: '',
        }, {login: false});
      }
    case 'CUSTOMER_LOGOUT':
      AppContextProvider.setSecurity(undefined);
      return Object.assign({
        id: '',
        account: '',
        password: '',
        name: '',
      }, {login: false});
    default:
      return state;
  }
};
export default customer;