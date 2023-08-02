import React from 'react'
import App from "./App"
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux';
import  store  from './redux/store.js'
import {BrowserRouter} from 'react-router-dom';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
)
