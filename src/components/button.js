import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonStyle = styled.a`
  background-color: ${props => props.theme.accent};
  border: none;
  color: ${props => props.theme.textInv};
  margin-right: 5px;
  width: fit-content;

  :hover, 
  :focus, 
  :not(:disabled):not(.disabled):active, 
  btn-primary:not(:disabled):not(.disabled).active{
    background-color: ${props => props.theme.accentHover};
    border: none;
    box-shadow: none;
    color: ${props => props.theme.textInv};
  }
`;

const Button = props => {
  return (
    <ButtonStyle
      href={props.href}
      target={props.sameTab ? null : "_blank"}
      rel={props.sameTab ? null : 'noopener noreferrer'}
      role="button"
      className={"btn " + props.className}
      id={props.id}
    >
      {props.children}
    </ButtonStyle>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
}

export default Button;