import React, { useRef } from "react"
import styled, { useTheme } from "styled-components"

import ActionButtons from "../components/banner/actionButtons"
// import FeaturedProject from "../components/banner/featuredProject"
import Footer from "../components/layout/footer"
import InteractiveDrawing from "../components/interactiveDrawing"
import Name from "../components/banner/name"

// import { featuredProjects } from "../scripts/projectList"

// const projects = featuredProjects([
//   "Threadbare",
//   "In AR We Trust",
//   "Sign Search",
// ])

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

const DrawingWrapper = styled.div`
  canvas {
    /* --mask: linear-gradient(to top, white 60%, transparent 80%) top;
    -webkit-mask: var(--mask);
    mask: var(--mask); */
    /* -webkit-mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.2),
        white,
        rgba(0, 0, 0, 0.2)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.2), white, rgba(0, 0, 0, 0.2)); */
    mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1) 15%,
        white 25%,
        white 50%,
        white 80%,
        rgba(0, 0, 0, 0.1) 90%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, white 30%);
    -webkit-mask-composite: source-in; /* For Chrome */
    mask-composite: intersect; /* For Firefox */
    mask-position: center;
    mask-size: 70% 70%;
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
