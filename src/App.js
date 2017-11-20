import React, { PureComponent } from 'react'
// import Routes from './util/Routes'
import Questionnaire from './containers/Questionnaire'
import './App.css'

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <main>
          <Questionnaire />
        </main>
      </div>
    )
  }

}

export default App
