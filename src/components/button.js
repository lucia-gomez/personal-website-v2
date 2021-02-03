import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  render() {
    return (
      <a
        href={this.props.href}
        target={this.props.sameTab ? null : "_blank"}
        rel={this.props.sameTab ? null : 'noopener noreferrer'}
        role="button"
        className="btn btn-primary"
        id={this.props.id}
      >
        {this.props.children}
      </a>
    )
  }
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
}