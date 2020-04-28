import * as actionTypes from './UserTypes';

const UserReducer = (state, action) => {

  switch (action.type) {
    case actionTypes.SET_LOCATION:
      return { ...state, location: action.payload }
      break;
    default:
      break;
  }
}

export default UserReducer;