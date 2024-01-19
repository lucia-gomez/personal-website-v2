import { Link, useNavigate } from "react-router-dom"
import styled, { css } from "styled-components"

import { FaInstagram } from "react-icons/fa"
import React from "react"

const buttonStyle = css`
  background-color: ${props => props.theme.accent};
  border: none;
  color: ${props => props.theme.text};
  padding: 0;
  border-radius: 5px;

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

  :focus,
  :not(:disabled):not(.disabled):active {
    background-color: ${props => props.theme.accentLight};
    border: none;
    box-shadow: none;
    color: ${props => props.theme.text};
  }

  :active:focus {
    box-shadow: none !important;
  }

  @media (any-hover: hover) {
    :hover {
      background-color: ${props => props.theme.accentHover};
      border: none;
      box-shadow: none;
      color: ${props => props.theme.text};
    }
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
const BootstrapButtonStyled = styled.button`
  ${buttonStyle}
`

export const ButtonLink = props => (
  <BootstrapButtonStyled
    onClick={props.onClick}
    disabled={props.disabled}
    className={props.className}
    id={props.id}
    {...props}
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
  const navigate = useNavigate()

  const onClickAsync = () =>
    onClick().then(_ => {
      navigate({
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

const SIZE = 75
const RoundButtonStyle = styled(ButtonLink)`
  height: ${SIZE}px;
  width: ${SIZE}px;
  border-radius: ${SIZE}px;

  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  box-shadow: 0px 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  transition: transform 200ms;

  :hover {
    transform: scale(1.1);
  }

  animation-duration: 1s;
  --webkit-animation-duration: 1s;
  animation-delay: 1s;
  --webkit-animation-delay: 1s;

  i {
    color: ${props => props.theme.text};
    font-size: 30px;
  }
`

export function RoundButton(props) {
  return <RoundButtonStyle {...props}>{props.children}</RoundButtonStyle>
}
