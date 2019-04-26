import React from 'react'
import { connect } from 'react-redux'
import LinkBtn from '../linkBtn/'
import { LOG_OUT } from '../../redux/actions/SessionActions'
import { Link } from 'react-router-dom'
import { Translate } from 'react-localize-redux';

import styles from './index.css';

const LoginBtn = ( { isAuth, lod_out } ) => {
  const _logOut = () => lod_out()

  return (
    <div className={styles.login}>
      {
        isAuth ?
          <Link to="/" className={styles.login__btn} onClick={_logOut}>
            <Translate id="btn.logOut">Выйти</Translate>
          </Link>
          :
          <LinkBtn className={styles.login__btn} to="/login" label="Логин" translateId="btn.logIn" />
      }
    </div>
  )
}

const mapStateToProps = state => {
  return ( {
    isAuth: state.session.user
  } )
}

const mapDispatchToProps = dispatch => ( {
  lod_out: () => {
    dispatch( { type: LOG_OUT } )
  }
} )

export default connect( mapStateToProps, mapDispatchToProps )( LoginBtn )
