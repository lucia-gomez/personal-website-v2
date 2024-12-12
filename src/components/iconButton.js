import Link from "./link"
import React from "react"
import { a } from "../style/blogStyle"
import styled from "styled-components"

const Icon = styled.div`
  ${a}
  cursor: pointer;
  text-shadow: 0 0 5px ${props => props.theme.bg};

  ion-icon {
    font-size: 22px;
  }
`

export const IconButton = props => (
  <Icon onClick={props.onClick}>
    <ion-icon name={props.className}></ion-icon>
  </Icon>
)

export const IconButtonLink = styled(Link)`
  ${a}
  padding-left: 8px;
  display: inline;
  margin-bottom: -8px;
`

export default function ExternalIconButton(link, sameTab = false) {
  return (
    <IconButtonLink href={link ?? ""} key={link} sameTab={sameTab}>
      <ion-icon name="link" style={{ fontSize: 24 }}></ion-icon>
    </IconButtonLink>
  )
}
