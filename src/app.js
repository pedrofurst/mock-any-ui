import React from 'react'
import 'normalize.css'
import 'styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const json = {
  "Object": {
    "name": "pedro",
    "age": 123
  }
}
const App = () => (
  <div className="App">
    <div className="containeir">
      <div className="row">
        <div className="text-center">
          <h1>Mock Any</h1>
          <p>You can mock anything.</p>
          <p>Enjoy!</p>
        </div>
      </div>
    </div>
  </div>
)

export default App
