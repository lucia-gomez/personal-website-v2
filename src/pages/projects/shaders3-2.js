import { FaGithub } from "react-icons/fa/index.esm.js"
import { NavLink } from "react-router-dom"
import React from "react"
import SectionTitle from "../../components/sectionTitle"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 56px 20px 50px 20px;

  a {
    color: ${props => props.theme.text};
  }

  h2 {
    margin: 0;
    padding-right: 20px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const IFrame = styled.iframe`
  width: 100%;
  height: 79vh;
  border: none;
  background-color: transparent;
`

export default function Shaders32() {
  return (
    <Wrapper>
      <Row>
        <SectionTitle>Shaders - Dice Pattern</SectionTitle>
        <NavLink
          to="https://github.com/lucia-gomez/shaders/blob/main/week3-dice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="36" />
        </NavLink>
      </Row>
      <IFrame
        title="Week 1 Shaders"
        src="https://lucia-gomez.github.io/shaders/week3-dice/"
        allowtransparency="true"
      ></IFrame>
    </Wrapper>
  )
}
