import React, { useContext } from 'react'
import { AlertContext } from '../../context/AlertContext'
import {AlertMsg} from '../../styles'

export default function Alert() {
  const {error} = useContext(AlertContext);
  return (
    <div>
      {error ? <AlertMsg>{error}</AlertMsg> : null}
    </div>
  )
}
