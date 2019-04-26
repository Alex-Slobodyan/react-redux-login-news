import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withLocalize } from 'react-localize-redux';
import LanguageToggle from './LanguageToggle';

import PrivateRoute from './containers/PrivateRoute'
import Login from './containers/Login/'
import Home from './containers/Home/'
import News from './containers/News/'
import NewsId from './containers/NewsId/'
import NotFound from './containers/NotFound/'

import LinkBtn from './components/linkBtn/'
import LoginBtn from './components/loginBtn/'

import globalTranslations from './translations/global.json';

import styles from './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'Ru', code: 'ru' },
        { name: 'En', code: 'en' },
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup: false,
        renderInnerHtml: true
      }
    });

    this.props.addTranslation(globalTranslations);
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className={styles.topMenu}>
            <LinkBtn to="/" label={'Главная'} translateId='btn.home' />
            <LinkBtn to="/news" label={'Новости'} translateId='btn.news' />
            <LoginBtn />
            <LanguageToggle />
          </div>
        </header>
        <div className={styles.content}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/news" component={News} />
            <Route path="/news-description/:id" component={NewsId} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withLocalize(App)
