import React, { useRef } from "react"
import styled, { useTheme } from "styled-components"

import ActionButtons from "../components/banner/actionButtons"
import FeaturedProject from "../components/banner/featuredProject"
import Footer from "../components/layout/footer"
import InteractiveDrawing from "../components/interactiveDrawing"
import Name from "../components/banner/name"
import { featuredProjects } from "../scripts/projectList"

const projects = featuredProjects([
  "Threadbare",
  "In AR We Trust",
  "Sign Search",
])

const LandingWrapper = styled.div`
  width: 100%;
  height: 100svh;
  overflow-y: clip;
  overflow-x: clip;
  position: relative;
`

// const TopSpacer = styled.div`
//   height: 40vh;
//   @media screen and (min-width: 576px) {
//     height: 60vh;
//   }
// `

const Section = styled.div`
  position: absolute;
  top: 35vh;
  @media screen and (min-width: 576px) {
    top: 50vh;
  }
  padding: 0 20px;
`

const DrawingWrapper = styled.div`
  canvas {
    --mask: linear-gradient(white 60%, transparent 80%);
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }
`

const Spacer = styled.div`
  height: 30vh;
  @media screen and (min-width: 576px) {
    height: ${props => props.height};
  }
`

export default function LandingPage() {
  const theme = useTheme()
  const pageRef = useRef()

  return (
    <>
      <LandingWrapper ref={pageRef} id="banner">
        <DrawingWrapper>
          <InteractiveDrawing />
        </DrawingWrapper>
        <Section>
          <Name color={theme.text} />
          <ActionButtons />
          <Spacer height={"20vh"} />
        </Section>
        {/* <AnimatedSection offset={0}></AnimatedSection>
      {projects.map((project, idx) => (
        <AnimatedSection key={idx}>
          <FeaturedProject project={project} />
        </AnimatedSection>
      ))}
      */}
      </LandingWrapper>
      <Footer style={{ position: "absolute", bottom: 0 }} />
    </>
  )
}
