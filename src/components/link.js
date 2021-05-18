import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkStyle = styled.a`
  color: ${props => props.theme.accent};

  :hover {
    color: ${props => props.theme.accentLight};
    text-decoration: none;
  }
`;

export default function Link(props) {
  return (
    <LinkStyle href={props.href} className={props.className ?? ''} target="_blank" rel='noopener noreferrer'>
      {props.children}
    </LinkStyle>
  );
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}