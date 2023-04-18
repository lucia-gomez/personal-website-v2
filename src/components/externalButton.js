import Link from "../components/link"
import React from "react"
import styled from "styled-components"

export const IconLink = styled(Link)`
  color: ${props => props.theme.accent};
  padding-left: 8px;
  display: inline;
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const ExternalLink = styled(IconLink)`
  i {
    font-size: 26px;
  }
`

export default function ExternalButton(link) {
  return (
    <ExternalLink href={link ?? ""} key={link}>
      <i className="material-icons">launch</i>
    </ExternalLink>
  )
}
