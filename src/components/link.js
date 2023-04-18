import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { a } from "../style/blogStyle"

const LinkStyle = styled.a`
  ${a}
`

export default function Link(props) {
  return (
    <LinkStyle
      href={props.href}
      className={props.className ?? ""}
      style={props.style}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </LinkStyle>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
}
