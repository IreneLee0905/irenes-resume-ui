// import {ADD_USER} from "../action/actions";

const user = (state = {name: 'a', status: 'logout'}, action) => {
  console.log('reducer user status= ' + state.status);

  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, action.state);
    default:
      return state;
  }
};
export default user;