import React, { useEffect, useMemo, useRef, useState } from "react"
import styled, { useTheme } from "styled-components"

import AnimationOnScroll from "react-animate-on-scroll"
import { ButtonLink } from "./components/button"
import Footer from "./components/layout/footer"
import Name from "./components/banner/name"
import { colorInterpolate } from "./scripts/util"
import { featuredProjects } from "./scripts/projectList"
import { hexToRGB } from "./style/theme.js"
import { makePortfolioCard } from "./components/portfolio/portfolioCardDeck"

const projects = featuredProjects([
  "In AR We Trust",
  "Sign Search",
  "Lava Lamp Simulator",
])

const LandingWrapper = styled.div`
  max-height: var(--doc-height);
  overflow-y: scroll;
  position: relative;
`

const Sticky = styled.div`
  position: sticky;
  top: 75px;
  padding: 0 5vw;
`

function AnimatedSection(props) {
  const { animateIn = true, offset = -100, children } = props

  const parent = child =>
    animateIn ? (
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        // animateOut="animate__zoomOut"
        animatePreScroll={false}
        // animateOnce
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
      <div style={{ height: "60vh" }} />
    </section>
  )
}

export default function App() {
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
      <div style={{ height: "40vh" }} />
      <AnimatedSection animateIn={false}>
        <Name color={lerpColor} />
      </AnimatedSection>
      <AnimatedSection offset={0}>
        <p>
          Hi, I'm Lucia. I build a lot of cool stuff, but here's some of my
          favorite projects
        </p>
      </AnimatedSection>
      {projects.map((project, idx) => (
        <div style={{ padding: "24px 0" }}>
          <AnimatedSection offset={-100} key={idx}>
            {makePortfolioCard(project)}
          </AnimatedSection>
        </div>
      ))}
      <div style={{ padding: "50px 0" }}>
        <AnimatedSection offset={50}>
          <p>There's more where that came from...</p>
          <Actions>
            <ButtonLink to="/portfolio" sameTab={true}>
              Full Portfolio
            </ButtonLink>
            <ButtonLink to="/about-me" sameTab={true}>
              About Me
            </ButtonLink>
            <ButtonLink to="/blog" sameTab={true}>
              Blog
            </ButtonLink>
          </Actions>
        </AnimatedSection>
      </div>
    </LandingWrapper>
  )
}

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;
  }
`

const FeaturedWrapper = styled.div`
  padding: 0px 20px 50px;
`

// function FeaturedWork() {
//   return (
//     <FeaturedWrapper>
//       {projects.map((project, idx) => {
//         makePortfolioCard(project)
//       })}
//       <p>There's more where that came from...</p>
//       <ArchiveButton to="/portfolio" sameTab={true}>
//         Explore the Archive
//       </ArchiveButton>
//       <Footer />
//     </FeaturedWrapper>
//   )
// }
