import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './containers/PrivateRoute'
import LoginContainer from './containers/LoginContainer'

import LinkBtn from './components/linkBtn/'
import LoginBtn from './components/loginBtn/'
import Home from './components/Home'
import NewsContainer from './containers/NewsContainer'
import NotFound from './components/NotFound'
import NewsId from './components/newsid'

import styles from './App.css'

const App = () => (
  <div>
    <header className="header">
      <div className={styles.topMenu}>
        <LinkBtn to="/" label={'Главная'} />
        <LinkBtn to="/news" label={'Новости'} />
        <LoginBtn />
      </div>
    </header>
    <div className={styles.content}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute path="/news" component={NewsContainer} />
        <Route path="/news-description/:id" component={NewsId} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)


export default App
