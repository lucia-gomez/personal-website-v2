import {
  PortfolioCardDeck,
  makePortfolioCard,
} from "./components/portfolio/portfolioCardDeck"
import React, { useEffect, useRef, useState } from "react"
import styled, { css, useTheme } from "styled-components"

import { ButtonLink } from "./components/button"
import SectionTitle from "./components/sectionTitle"
import { colorInterpolate } from "./scripts/util"
import { featuredProjects } from "./scripts/projectList"
import { hexToRGB } from "./style/theme.js"

const LandingWrapper = styled.div`
  max-height: var(--doc-height);
  overflow-y: scroll;
  position: relative;
`

const Sticky = styled.div`
  position: sticky;
  top: 75px;
  /* height: var(--doc-height); */
`

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  @media screen and (max-width: 576px) {
    align-items: flex-start;
    padding-left: 5vw;

    h1,
    h4 {
      text-align: left;
    }
  }
`

const bannerText = css`
  text-align: center;
  opacity: 0;
  margin: 0;

  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;
`

const Title = styled.h1`
  ${bannerText}
  line-height: 1em;
  font-size: 70px;
  margin-bottom: 12px;

  animation-delay: 500ms;
  --webkit-animation-delay: 500ms;
`

const JobTitle = styled.h4`
  ${bannerText}
  height: 10vh;

  animation-delay: 1s;
  --webkit-animation-delay: 1s;
`

const jobTitles = [
  "Creative Technologist",
  "Software Engineer",
  "Web Developer",
]

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
    <LandingWrapper ref={pageRef}>
      <section>
        <div style={{ height: "40vh" }} />
        <Sticky>
          <Wrapper style={{ color: lerpColor }}>
            <Title className="animate__animated animate__fadeInDown">
              Lucia Gomez
            </Title>
            <JobTitle className="animate__animated animate__fadeInUp">
              Creative Technologist
            </JobTitle>
          </Wrapper>
        </Sticky>
        <div style={{ height: "60vh" }} />
      </section>
      <section>
        <Sticky>
          <FeaturedWork />
        </Sticky>
      </section>
    </LandingWrapper>
  )
}

const FeaturedWrapper = styled.div`
  padding: 0px 20px 50px;
`

const FeaturedTitle = styled(SectionTitle)`
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 36px;
    text-align: left;
  }
`

const ArchiveButton = styled(ButtonLink)`
  margin: auto;
  margin-top: 20px;
`

function FeaturedWork() {
  const projects = featuredProjects([
    "In AR We Trust",
    "Sign Search",
    "Lava Lamp Simulator",
  ])
  return (
    <FeaturedWrapper>
      <p>
        Hi, I'm Lucia. I build a lot of cool stuff, but here's some of my
        favorite projects
      </p>
      <PortfolioCardDeck>{projects.map(makePortfolioCard)}</PortfolioCardDeck>
      <p>There's more where that came from...</p>
      <ArchiveButton to="/portfolio" sameTab={true}>
        Explore the Archive
      </ArchiveButton>
    </FeaturedWrapper>
  )
}
