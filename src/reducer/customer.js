// import {ADD_USER} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider"
const customer = (state = {name: '', status: ''}, action) => {
  console.log(state);

  switch (action.type) {
    case 'ADD_CUSTOMER':
      return Object.assign({}, state, action.state.data);
    case 'CUSTOMER_LOGIN':
      console.log(action);
      //set login security object
      AppContextProvider.setSecurity(action.state.data);
      console.log(AppContextProvider.getSecurity());
      return Object.assign({}, state, {...action.state.data}, {login: true});
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