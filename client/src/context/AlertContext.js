import React, { createContext, useReducer } from 'react'

export const AlertContext = createContext();

const AlertReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_ALERT':
      return {error: payload}
      break;
    case 'CLEAR_ALERT':
    default:
      return {error: null} 
  }
}

const initialState = {
  error:null
}

export default function AlertContextProvider(props) {
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (alert) => {
    dispatch({type:'SET_ALERT', payload: alert});
  }
  const clearAlert = () => {
    dispatch({type:'CLEAR_ALERT'});
  }
  


  return (
    <AlertContext.Provider value={{
      error: state.error,
      setAlert,
      clearAlert
    }}>
      {props.children}
    </AlertContext.Provider>
  )
}
