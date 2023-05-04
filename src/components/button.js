import { Link, useHistory } from "react-router-dom"
import styled, { css } from "styled-components"

import BootstrapButton from "react-bootstrap/Button"
import { FaInstagram } from "react-icons/fa"
import React from "react"

const buttonStyle = css`
  background-color: ${props => props.theme.accent};
  border: none;
  color: ${props => props.theme.text};
  width: fit-content;
  padding: 0;

  .disabled,
  :disabled {
    background-color: ${props => props.theme.accentLight};
    border: none;
    color: ${props => props.theme.text};

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
    color: ${props => props.theme.text};
  }

  :active:focus {
    box-shadow: none !important;
  }
`
const ButtonContent = styled.div`
  a,
  p {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    margin: 0;
    color: ${props => props.theme.text};
    text-decoration: unset;
  }
`
const BootstrapButtonStyled = styled(BootstrapButton)`
  ${buttonStyle}
`

export const ButtonLink = props => (
  <BootstrapButtonStyled
    onClick={props.onClick}
    disabled={props.disabled}
    className={props.className}
    id={props.id}
  >
    <ButtonContent>
      {props.disabled ? (
        <p>{props.children}</p>
      ) : (
        <Link
          to={props.to}
          target={props.sameTab ? null : "_blank"}
          rel={props.sameTab ? null : "noopener noreferrer"}
        >
          {props.children}
        </Link>
      )}
    </ButtonContent>
  </BootstrapButtonStyled>
)

export const Button = props => {
  return (
    <BootstrapButtonStyled {...props}>
      <ButtonContent>
        <p>{props.children}</p>
      </ButtonContent>
    </BootstrapButtonStyled>
  )
}

export const ButtonLinkAsync = props => {
  const { onClick, to, ...buttonProps } = props
  const history = useHistory()

  const onClickAsync = () =>
    onClick().then(_ => {
      history.push({
        pathname: to,
        key: Math.random(),
        state: {
          applied: true,
        },
      })
    })
  return <Button onClick={onClickAsync} {...buttonProps} />
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
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
