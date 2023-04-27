import styled, { css } from "styled-components"

import BootstrapButton from "react-bootstrap/Button"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"
import React from "react"
import { colors } from "../style/theme"

const buttonStyle = css`
  background-color: ${props => props.theme.accent};
  border: none;
  color: ${colors.white};
  width: fit-content;

  .disabled,
  :disabled {
    background-color: ${props => props.theme.accentLight};
    border: none;
    color: ${colors.white};

    :hover,
    :focus {
      background-color: ${props => props.theme.accentLight};
    }
  }

  :hover,
  :focus,
  :not(:disabled):not(.disabled):active,
  btn-primary:not(:disabled):not(.disabled).active {
    background-color: ${props => props.theme.accentHover};
    border: none;
    box-shadow: none;
    color: ${colors.white};
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ButtonStyle = styled(Link)`
  ${buttonStyle}
`

const BootstrapButtonStyled = styled(BootstrapButton)`
  ${buttonStyle}
`

export const ButtonLink = props => {
  return (
    <ButtonStyle
      to={props.to}
      onClick={props.onClick}
      target={props.sameTab ? null : "_blank"}
      rel={props.sameTab ? null : "noopener noreferrer"}
      role="button"
      className={"btn " + props.className}
      id={props.id}
    >
      {props.children}
    </ButtonStyle>
  )
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
  )
}

export const InstagramButton = props => {
  return (
    <ButtonLink to={props.to}>
      <Row>
        <FaInstagram
          size="20px"
          className="tool-icon"
          style={{ marginRight: 5 }}
        />
        {props.children}
      </Row>
    </ButtonLink>
  )
}
