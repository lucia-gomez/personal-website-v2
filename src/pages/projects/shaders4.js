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

export default function Shaders4() {
  return (
    <Wrapper>
      <Row>
        <SectionTitle>Shaders - Vertex Displacement</SectionTitle>
      </Row>

      <iframe
        src="https://codesandbox.io/embed/r5s35y?view=Preview&module=%2Fsrc%2Fshaders%2Fbounce.vert&hidenavigation=1"
        style={{
          width: "100%",
          height: "500px",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
          marginTop: "40px",
        }}
        title="vertex displacement"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </Wrapper>
  )
}
