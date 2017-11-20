import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

// import { BrowserRouter } from 'react-router-dom'
// {/*<BrowserRouter>*/}
//   {/* BrowserRouter uses the browser’s History API to create real URLs. It renders our App component allowing us to create the routes we need inside that.*/}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
