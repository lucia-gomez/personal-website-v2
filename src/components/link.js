import React from "react"
import { a } from "../style/blogStyle"
import styled from "styled-components"

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
