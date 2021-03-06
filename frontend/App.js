import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'


import Home from './components/Home'
import Login from './components/Login'
import Players from './components/Players'
import Navbar from './components/Navbar'
import Register from './components/Register'
import League from './components/League'
import Table from './components/Table'
import Team from './components/Team'
import MyTeam from './components/MyTeam'
import Fixtures from './components/Fixtures'
import Results from './components/Results'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/players" component={Players} />
      <Route exact path="/league/:id" component={League} />
      <Route exact path="/league/:id/table" component={Table} />
      <Route exact path="/team/:id" component={Team} />
      <Route exact path="/users/:id" component={MyTeam} />
      <Route exact path="/league/:id/fixtures" component={Fixtures} />
      <Route exact path="/league/:id/results" component={Results} />
    </Switch> 
  </BrowserRouter>
)

export default App