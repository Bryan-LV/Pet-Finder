import React, {createContext, useReducer} from 'react'
import UserState from './UserState'
import UserReducer from './UserReducer';
import * as UserActions from './UserActions';
export const Usercontext = createContext();

export default function UserContext(props) {
  const [state, dispatch] = useReducer(UserReducer, UserState);

  return (
    <Usercontext.Provider value={{
      location: state.location,
      types: state.types,
      setLocation: (location) => dispatch(UserActions.setLocation(location))
    }}>
      {props.children}
    </Usercontext.Provider>
  )
}
