const initialState = {
  isLoggedIn: false,
  info: {}
};

const mainReducer = (state = initialState, action) => {
  if (action.type === 'HANDLE_LOGIN') {
    //  MAKE AN API CALL coming sooooon
    const res = {
      lastName: 'McLein',
      firstName: 'John',
      email: 'jmcl@jmcl.com',
      fullName: 'John McLein',
      birthday: '11/11/11',
      address: 'New York City'
    };

    state.info = res;
    state.isLoggedIn = true;

    return Object.assign({}, state);
  }

  if (action.type === 'HANDLE_LOGOUT') {
    state.isLoggedIn = false;
    return Object.assign({}, state);
  }

  return state;
};

export default mainReducer;
