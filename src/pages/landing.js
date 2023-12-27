import React, { useRef } from "react"
import styled, { useTheme } from "styled-components"

import { AnimationOnScroll } from "react-animation-on-scroll"
import { ButtonLink } from "../components/button"
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
  max-height: var(--doc-height);
  overflow-y: scroll;
  overflow-x: clip;
  position: relative;
`

const TopSpacer = styled.div`
  height: 40vh;
  @media screen and (min-width: 576px) {
    height: 60vh;
  }
`

const Sticky = styled.div`
  position: sticky;
  top: 75px;
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
    height: 30vh;
  }
`

function AnimatedSection(props) {
  const { animateIn = true, offset = -100, children } = props

  const parent = child =>
    animateIn ? (
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animatePreScroll={false}
        duration={0.5}
        offset={offset}
        animateOnce={true}
        scrollableParentSelector="#banner"
      >
        {child}
      </AnimationOnScroll>
    ) : (
      <>{child}</>
    )

  return parent(
    <section>
      <Sticky>{children}</Sticky>
      {/* <Spacer /> */}
    </section>
  )
}

export default function LandingPage() {
  const theme = useTheme()
  const pageRef = useRef()

  return (
    <>
      <LandingWrapper ref={pageRef} id="banner">
        <DrawingWrapper>
          <InteractiveDrawing />
        </DrawingWrapper>
        <TopSpacer />
        <AnimatedSection animateIn={false}>
          <Name color={theme.text} />
          <Spacer />
        </AnimatedSection>
        {/* <AnimatedSection offset={0}></AnimatedSection>
      {projects.map((project, idx) => (
        <AnimatedSection key={idx}>
          <FeaturedProject project={project} />
        </AnimatedSection>
      ))}
      <AnimatedSection offset={-100}>
        <Actions>
          <p>There's more where that came from...</p>
          <ButtonLink to="/portfolio" sameTab={true}>
            Full Portfolio
          </ButtonLink>
          <ButtonLink to="/subscribe" sameTab={true}>
            Subscribe
          </ButtonLink>
        </Actions>
      </AnimatedSection> */}
      </LandingWrapper>
      <Footer style={{ position: "absolute", bottom: 0 }} />
    </>
  )
}

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--doc-height) - 150px);

  button {
    margin-bottom: 8px;
  }
`
