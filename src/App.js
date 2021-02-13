import React from 'react'
import { Services } from './components/services/Services'
import { Staff } from './components/Staff'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Reservations } from './components/reservations/Reservations'
import './stylesheets/landing-style.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='landing-backdrop'>
      <Router>
        <header>
          <div className='logo-container'>
            <Link className="logo" to='/'>FadeShack</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link className="nav-link" to='/Services'>Services</Link>
              </li>
              <li>
                <Link className="nav-link" to='/staff'>Staff</Link>
              </li>
              <li>
                <Link className="nav-link" to='/reservations'>Reservations</Link>
              </li>
              <li>
                <Link className="nav-link" to='/contact'>Contact</Link>
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
    </div>
  )
}

export default App
