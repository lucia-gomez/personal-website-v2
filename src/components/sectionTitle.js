import Link from "./link"
import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  margin: 0px auto 20px;
  color: ${props => props.theme.text};
  font-size: 48px;
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.text};

  :hover:after {
    display: inline-block;
    padding-left: 4px;
    content: "#";
  }
`

export default function SectionTitle(props) {
  return (
    <Title className={props.className} style={props.style} id={props.id}>
      {props.id != null ? (
        <HeaderLink to={`#${props.id}`} sameTab={true}>
          {props.children}
        </HeaderLink>
      ) : (
        props.children
      )}
      {/* {props.children} */}
    </Title>
  )
}
