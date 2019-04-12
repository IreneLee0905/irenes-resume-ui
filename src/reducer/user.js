// import {ADD_USER} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider"
const user = (state = {name: '', status: ''}, action) => {
  console.log(state);

  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, action.state);
    case 'USER_LOGIN':
      //set login security object
      AppContextProvider.setSecurity(action.state);
      console.log(AppContextProvider.getSecurity());
      return Object.assign({}, state, {...action.state}, {login: true});
    case 'USER_LOGOUT':

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
export default user;