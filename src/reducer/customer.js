// import {ADD_USER} from "../action/actions";
import AppContextProvider from "./../provider/AppContextProvider"
import HttpStatus from "../utils/HttpStatus";
import {showAlert} from "../action/actions";

const customer = (state = {list: [], entity: {name: '', status: ''}, message: {}}, action) => {
  console.log(state);


  switch (action.type) {
    case 'ADD_CUSTOMER':

      if (action.state.status === HttpStatus.OK) {
        return Object.assign({}, state, {
          entity: action.state.data,
          message: action.state.message
        });
      } else if (action.state.status === HttpStatus.BAD_REQUEST) {

        return Object.assign({}, state, {
          message: action.state.message
        });
      } else {
        return state;
      }

    case 'CUSTOMER_LOGIN':
      let status = action.state.status;
      if (HttpStatus.OK === status) {
        //set login security object
        AppContextProvider.setSecurity(action.state.data);
        console.log(AppContextProvider.getSecurity());
        return Object.assign({}, state, {
          entity: action.state.data
        });
      } else {
        return Object.assign({
          entity: {
            id: '',
            account: '',
            password: '',
            name: '',
            login: false
          }
        })

      }
    case 'CUSTOMER_LOGOUT':
      AppContextProvider.setSecurity(undefined);
      return Object.assign({}, state, {
        entity: {
          id: "",
          account: "",
          firstName: "",
          lastName: "",
          password: "",
          login: false
        },
        list: [],
        message: {},
      });
    default:
      return state;
  }
};
export default customer;