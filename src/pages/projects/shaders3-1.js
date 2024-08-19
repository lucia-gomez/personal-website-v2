import { NavLink } from "react-router-dom"
import SectionTitle from "../../components/sectionTitle"
import { loadShadersWeek3Part1 } from "./shaders"
import styled from "styled-components"
import { useEffect } from "react"

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

const Canvas = styled.canvas`
  z-index: -1;
  /* top: 0; */
  display: block;
  width: 90%;
  height: 80%;
  /* position: fixed; */
`

export default function Shaders31() {
  useEffect(() => {
    loadShadersWeek3Part1(0.97, 0.8)
  }, [])

  return (
    <Wrapper>
      <Row>
        <SectionTitle>Shaders - Solar System</SectionTitle>
        <NavLink
          to="https://github.com/lucia-gomez/shaders/blob/main/week3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon
            name="logo-github"
            style={{ fontSize: 36, marginBottom: -8 }}
          ></ion-icon>
        </NavLink>
      </Row>

      <Canvas id="canvas"></Canvas>
    </Wrapper>
  )
}
