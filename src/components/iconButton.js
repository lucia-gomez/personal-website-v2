import Link from "./link"
import React from "react"
import { a } from "../style/blogStyle"
import styled from "styled-components"

const Icon = styled.i`
  ${a}
  padding-top: 16px;
  cursor: pointer;
  font-size: 22px;
  text-shadow: 0 0 5px ${props => props.theme.bg};
`

export const IconButton = props => (
  <Icon onClick={props.onClick} className={props.className} />
)

export const IconButtonLink = styled(Link)`
  ${a}
  padding-left: 8px;
  display: inline;
`

const ExternalWrapper = styled(IconButtonLink)`
  i {
    font-size: 26px;
  }
`

export default function ExternalIconButton(link, sameTab = false) {
  return (
    <ExternalWrapper href={link ?? ""} key={link} sameTab={sameTab}>
      <i className="material-icons">launch</i>
    </ExternalWrapper>
  )
}
