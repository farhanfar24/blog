import React from 'react'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom/cjs/react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import { Footer, Header } from '../../components'


const MainApp = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/detail-blog">
            <DetailBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    <Footer />
    </div>   
  )
}

export default MainApp