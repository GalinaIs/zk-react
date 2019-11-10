import React from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'
import './icon.css'

export const Icon = ({ selected }) => (
  <span className={classNames('customize-icon', selected && 'selected-icon')} />
)

Icon.propTypes = {
  selected: PropTypes.bool,
}
