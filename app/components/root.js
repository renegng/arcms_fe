import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {default as Home } from './homeComponent'

const Root = () => {


    return (
      <div
      className="main"

      >
      <Router>

        <Route exact path="/" component={Home} />
      </Router>
      </div>
  )

}




export default Root
