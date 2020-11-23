import React from 'react'
import PropTypes from 'prop-types'

export default class Link extends React.Component {
  render() {
    return (
      <a href={this.props.href} className={this.props.className ?? ''} target="_blank" rel='noopener noreferrer'>
        {this.props.children}
      </a>
    )
  }
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}