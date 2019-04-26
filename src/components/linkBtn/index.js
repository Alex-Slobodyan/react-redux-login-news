import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Translate } from 'react-localize-redux';

import styles from './index.css';

const LinkBtn = ({ to, label, translateId } ) => {
  return (
    <Link to={to} className={styles.btn}>
      <Translate id={translateId}>{label}</Translate>
    </Link>
  )
}

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default LinkBtn
