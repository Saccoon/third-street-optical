import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

//components
import Footer from '../components/footer/Footer'

//pages
import HomePage from '../pages/home/Home'

import * as routes from '../constants/routes'

const App = () =>
  <Router>
    <Fragment>
      {/* Home */}
      <Route exact path={routes.INDEX} component={() => <HomePage/>} />

      <Footer />
    </Fragment>
  </Router>

export default App
