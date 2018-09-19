import React from 'react'
import { connect } from 'react-redux'
import LinkBtn from '../linkBtn/'
import { LOG_OUT } from '../../actions/SessionActions'

import styles from './index.css';

class LoginBtn extends React.Component {
  _logOut = () => this.props.lod_out()

  render() {
    const { isAuth } = this.props
    return (
      <div className={styles.login}>
        {isAuth ? <button className={styles.login__btn} onClick={this._logOut} >Log Out </button> : <LinkBtn className={styles.login__btn} to="/login" label="Log In" />}
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return ( {
    isAuth: state.session.user
  } )
}

const mapDispatchToProps = dispatch => ( {
  lod_out: () => {
    dispatch( { type: LOG_OUT, payload: '' } )
  }
} )

export default connect( mapStateToProps, mapDispatchToProps )( LoginBtn )
