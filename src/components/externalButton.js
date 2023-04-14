import React from "react"
import styled from "styled-components"
import Link from "../components/link"

export const IconLink = styled(Link)`
  color: ${props => props.theme.accent};
  padding-left: 8px;
  display: inline;
  transition: transform 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
    transform: scale(1.1);
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
