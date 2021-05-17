import React from 'react'
import styled from "styled-components"

const Title = styled.div`
  margin: 0px auto 20px;

  span {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    line-height: 1.2;
    font-family: 'Montserrat', sans-serif;
    font-size: 48px;
    padding: 0px 3px;
    box-shadow: inset 0 -18px 0 0 ${props => props.theme.accent};
    width: fit-content;
  }
`;

export default function SectionTitle(title) {
  return (
    <Title>
      <span>{title}</span>
    </Title>
  )
}