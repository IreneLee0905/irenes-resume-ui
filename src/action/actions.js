

export function addUser(name) {
  console.log(name);
  let state = {
    name: name,
    status: 'login'
  };

  return {state, type: 'ADD_USER'}
}