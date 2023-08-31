import React, { useEffect, useRef, useState } from "react"
import styled, { useTheme } from "styled-components"

import { AnimationOnScroll } from "react-animation-on-scroll"
import { ButtonLink } from "../components/button"
import FeaturedProject from "../components/banner/featuredProject"
import Footer from "../components/layout/footer"
import Name from "../components/banner/name"
import { colorInterpolate } from "../scripts/util"
import { featuredProjects } from "../scripts/projectList"

const projects = featuredProjects([
  "Threadbare",
  "In AR We Trust",
  "Sign Search",
])

const LandingWrapper = styled.div`
  max-height: var(--doc-height);
  overflow-y: scroll;
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

const Spacer = styled.div`
  height: 60vh;
  @media screen and (min-width: 576px) {
    height: 80vh;
  }
`

function AnimatedSection(props) {
  const { animateIn = true, offset = -100, children } = props

  const parent = child =>
    animateIn ? (
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animatePreScroll={false}
        duration={1}
        offset={offset}
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
      <Spacer />
    </section>
  )
}

export default function LandingPage() {
  const theme = useTheme()
  const pageRef = useRef()
  const [lerpColor, setLerpColor] = useState(0)

  useEffect(() => {
    pageRef.current.addEventListener("scroll", _ => {
      const percentage = (2 * pageRef.current.scrollTop) / window.innerHeight
      const lerp = colorInterpolate(
        "rgb(0,0,0)",
        "rgb(247, 240, 255)",
        percentage
      )
      setLerpColor(lerp)
    })
  }, [theme.text])

  return (
    <LandingWrapper ref={pageRef} id="banner">
      <TopSpacer />
      <AnimatedSection animateIn={false}>
        <Name color={lerpColor} />
      </AnimatedSection>
      <AnimatedSection offset={0}>
        <p>
          Hi, I'm Lucia. I build a lot of cool stuff, but here are some of my
          favorite projects
        </p>
      </AnimatedSection>
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
      </AnimatedSection>
      <Footer style={{ position: "unset" }} />
    </LandingWrapper>
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
