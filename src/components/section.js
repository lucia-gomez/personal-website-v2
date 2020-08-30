import React from 'react'
import PropTypes from 'prop-types'

export default class Section extends React.Component {
  render() {
    const leftSlant = (
      <svg className='left-slant' viewBox="0 0 5 5" preserveAspectRatio="none">
        <polygon points="5,5 0,0, 0,5" />
      </svg>);

    const rightSlant = (
      <svg className='right-slant' viewBox="0 0 5 5" preserveAspectRatio="none">
        <polygon points="0,5 5,0 5,5" />
      </svg>
    );

    const isEven = this.props.index % 2 === 0;

    return (
      <section id={this.props.id} className={isEven ? '-even-section' : '-odd-section'}>
        <div className='section-content'>
          {this.props.children}
        </div>
        {isEven ? rightSlant : leftSlant}
      </section>
    );
  }
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}