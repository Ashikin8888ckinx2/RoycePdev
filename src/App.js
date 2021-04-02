import React from 'react'
import { Services } from './components/services/Services'
import { Staff } from './components/Staff'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Reservations } from './components/reservations/Reservations'
import './stylesheets/landing-style.css'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className='landing-backdrop'>
      <Router>
        <header>
          <div className='logo-container'>
            <NavLink className="logo" to='/'>SDFadeShack</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="active-nav" className="nav-link" exact to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" className="nav-link" exact to='/Services'>Services</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" className="nav-link" exact to='/staff'>Staff</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" className="nav-link" exact to='/reservations'>Reservations</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" className="nav-link" to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className='landing-info-container'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Services'>
              <Services />
            </Route>
            <Route path='/reservations'>
              <Reservations />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/staff'>
              <Staff />
            </Route>
          </Switch>
        </div>
      </Router>
      <div className="watermark">SDFadeShack</div>
    </div>
  )
}

export default App
