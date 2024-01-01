import React, { useRef } from "react"

import ActionButtons from "../components/banner/actionButtons"
import BackgroundSketch from "../components/layout/backgroundSketch"
import Footer from "../components/layout/footer"
import Name from "../components/banner/name"
import styled from "styled-components"

const LandingWrapper = styled.div`
  width: 100%;
  height: 100svh;
  overflow-y: clip;
  overflow-x: clip;
  position: relative;
`

const Section = styled.div`
  position: absolute;
  top: 35vh;
  @media screen and (min-width: 576px) {
    top: 50vh;
  }
  padding: 0 20px;
  z-index: 1;
`

const Spacer = styled.div`
  height: 30vh;
  @media screen and (min-width: 576px) {
    height: ${props => props.height};
  }
`

export default function LandingPage() {
  const pageRef = useRef()

  return (
    <>
      <LandingWrapper ref={pageRef} id="banner">
        <BackgroundSketch />
        <Section>
          <Name />
          <ActionButtons />
          <Spacer height={"20vh"} />
        </Section>
      </LandingWrapper>
      <Footer style={{ position: "absolute", bottom: 0 }} />
    </>
  )
}
