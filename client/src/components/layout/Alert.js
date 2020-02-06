import React, { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'

export default function Alert() {
  const {error} = useContext(AlertContext);
  return (
    <div>
      <h3>{error}</h3>
    </div>
  )
}
