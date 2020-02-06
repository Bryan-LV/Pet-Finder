const UserReducer = (state, action) => {
  const {type, payload} = action;

  if(type === 'SET_LOCATION'){
    return {...state, location: payload}
  }
}

export default UserReducer;