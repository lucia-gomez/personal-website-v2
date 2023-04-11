import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  margin: 0px auto 20px;
  color: ${props => props.theme.text};
  font-size: 48px;
`

export default function SectionTitle(title) {
  return <Title>{title}</Title>
}
