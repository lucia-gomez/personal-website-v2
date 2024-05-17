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

export default function Shaders6() {
  return (
    <Wrapper>
      <Row>
        <SectionTitle>Shaders - GPU Computing</SectionTitle>
      </Row>

      <iframe
        src="https://codesandbox.io/embed/74kxym?view=Editor&module=%2Fsrc%2Fshaders%2FmyPass.frag&hidenavigation=1&editorsize=40"
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
