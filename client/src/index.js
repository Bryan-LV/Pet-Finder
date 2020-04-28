import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserContext from './context/user/UserContext';
import AlertContextProvider from './context/AlertContext';
import { BrowserRouter } from 'react-router-dom'

const app = (<UserContext>
  <AlertContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AlertContextProvider>
</UserContext>)

ReactDOM.render(app, document.getElementById('root'));


