import React, {useReducer} from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'

const initialState = {
  location: '',
  types: []
}

export default function UserState(props) {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const setLocation = (location) => {
    dispatch({type:'SET_LOCATION', payload: location})
  }
  

  return (
    <UserContext.Provider value={{
      location: state.location,
      types: state.types,
      setLocation
    }}>
      {props.children}
    </UserContext.Provider>
  )
}
