import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './redux/reducers/'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { LocalizeProvider } from "react-localize-redux"

import './index.css'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <LocalizeProvider>
        <App />
      </LocalizeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
