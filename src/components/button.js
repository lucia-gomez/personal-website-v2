import React from 'react'
import PropTypes from 'prop-types'

export default class Button extends React.Component {
  render() {
    return (
      // <div role="button" className="btn btn-primary">
      //   <Link href={this.props.href}>
      //     {this.props.children}
      //   </Link>
      // </div>
      <a href={this.props.href}
        target="_blank" rel='noopener noreferrer' role="button" className="btn btn-primary">{this.props.children}</a>
    )
  }
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
}