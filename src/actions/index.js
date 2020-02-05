export const handleLogin = payload => {
  return {
    type: 'HANDLE_LOGIN',
    payload
  };
};

export const logOut = payload => {
  return {
    type: 'HANDLE_LOGOUT',
    payload
  };
};