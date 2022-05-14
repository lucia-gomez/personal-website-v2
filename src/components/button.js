import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors } from '../style/theme'
import { Button as BootstrapButton } from 'react-bootstrap'

const buttonStyle = css`
  background-color: ${props => props.theme.accent};
  border: none;
  color: ${colors.white};
  margin-right: 5px;
  width: fit-content;

  .disabled, :disabled {
    background-color: ${props => props.theme.accentLight};
    border: none;
    color: ${colors.white};

    :hover, :focus {
      background-color: ${props => props.theme.accentLight};
    }
  }

  :hover, 
  :focus, 
  :not(:disabled):not(.disabled):active, 
  btn-primary:not(:disabled):not(.disabled).active{
    background-color: ${props => props.theme.accentHover};
    border: none;
    box-shadow: none;
    color: ${colors.white};
  }
`;

export const ButtonStyle = styled.a`
  ${buttonStyle}
`;

const BootstrapButtonStyled = styled(BootstrapButton)`
  ${buttonStyle}
`;

export const ButtonLink = props => {
  return (
    <ButtonStyle
      href={props.href}
      onClick={props.onClick}
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

export const Button = props => {
  return (
    <BootstrapButtonStyled
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </BootstrapButtonStyled>
  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
}