import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import rootReducer from './toolkit/store'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer : rootReducer ,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)
