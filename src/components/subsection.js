import React from 'react'

export default class Subsection extends React.Component {
  render() {
    return (
      <div className='subsection'>
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
    )
  }
}