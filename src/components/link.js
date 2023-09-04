import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { a } from "../style/blogStyle"
import styled from "styled-components"

const LinkWrapper = styled(RouterLink)`
  ${a}
`

export default function Link(props) {
  return (
    <LinkWrapper
      to={props.to ?? props.href}
      className={props.className ?? ""}
      style={props.style}
      target={props.sameTab ? null : "_blank"}
      rel={props.sameTab ? null : "noopener noreferrer"}
    >
      {props.children}
    </LinkWrapper>
  )
}
