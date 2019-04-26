import React from 'react'
import { Redirect } from 'react-router-dom'
import { Translate } from 'react-localize-redux';

import styles from './index.css'

class Login extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    username: '',
    password: '',
  }


  handleSubmit = e => {
    console.table(this.props)
    e.preventDefault()
    const { username, password } = this.state

    this.props.logIn({ username, password }, () => {
        this.setState( { redirectToPreviousRoute: true } )
      }
    )
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState( prev => ( {
      ...prev,
      [ fieldName ]: value,
    } ) )
  }

  render() {
    const { location, errorMsg } = this.props
    const { from } = location.state || { from: { pathname: '/news' } }
    const { username, password, redirectToPreviousRoute } = this.state

    if ( redirectToPreviousRoute ) {
      return <Redirect to={from} />
    }

    return (
      <div className={styles.login}>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'username'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя пусто'}
            value={username}
            className={styles.login__input}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль пусто'}
            value={password}
            className={styles.login__input}
          />
          <button className={styles.login__btn} type="submit">
            <Translate id="btn.logIn">Логин</Translate>
          </button>
        </form>
      </div>
    )
  }
}

export default Login
