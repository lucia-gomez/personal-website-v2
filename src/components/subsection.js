import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 5px 30px;
  p {
    text-align: left;
  }
`

const Title = styled.h3`
  color: ${props => props.theme.header};
`

const Subsection = props => {
  return (
    <Wrapper className={props.className}>
      <Title>{props.title}</Title>
      {props.children}
    </Wrapper>
  )
}

export default Subsection
