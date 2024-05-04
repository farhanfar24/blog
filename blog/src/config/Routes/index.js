import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom'
import { Login, MainApp, Register } from '../../pages'

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
            <Route path='/'>
                <MainApp />
            </Route>
        </Switch>
    </Router>
  )
}

export default Routes