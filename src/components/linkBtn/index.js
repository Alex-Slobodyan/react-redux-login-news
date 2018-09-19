import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.css';

const LinkBtn = ( { to, label } ) => {
  return (
    <Link to={to} className={styles.btn}>
      {label}
    </Link>
  )
}

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkBtn
