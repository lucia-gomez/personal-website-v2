import { NavLink } from "react-router-dom"
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
  height: 80vh;
  border: none;
  background-color: transparent;
`

export default function Shaders1() {
  return (
    <Wrapper>
      <Row>
        <SectionTitle>Shaders - Reactive 3D Mesh</SectionTitle>
        <NavLink
          to="https://github.com/lucia-gomez/shaders/blob/main/week1/sketch.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon
            name="logo-github"
            style={{ fontSize: 36, marginBottom: -8 }}
          ></ion-icon>
        </NavLink>
      </Row>

      {/* <Metadata>{project.date}</Metadata> */}
      <IFrame
        title="Week 1 Shaders"
        src="https://lucia-gomez.github.io/shaders/week1/"
        allowtransparency="true"
      ></IFrame>
    </Wrapper>
  )
}
