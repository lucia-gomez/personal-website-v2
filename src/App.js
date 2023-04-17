import {
  PortfolioCardDeck,
  makePortfolioCard,
} from "./components/portfolio/portfolioCardDeck"

import { ButtonLink } from "./components/button"
import React from "react"
import Subsection from "./components/layout/subsection"
import { featuredProjects } from "./scripts/projectList"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 70px;
  color: #000;
  mix-blend-mode: color-dodge;
  margin: 0;
  margin-bottom: 20vh;
  text-align: center;
  animation: fade-in 1s 500ms forwards ease-in;
  @media screen and (max-width: 850px) {
    animation-name: fade-in-mobile;
  }

  @keyframes fade-in {
    from {
      color: #000;
    }
    to {
      color: #9d9d9d;
    }
  }

  @keyframes fade-in-mobile {
    from {
      color: #000;
    }
    to {
      color: #9d9d9d;
    }
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
    <div style={{ paddingBottom: 50 }}>
      <Subsection title="Featured Work" collapsible={false}>
        <PortfolioCardDeck>{projects.map(makePortfolioCard)}</PortfolioCardDeck>
        <ArchiveButton to="/portfolio" sameTab={true}>
          Explore the Archive
        </ArchiveButton>
      </Subsection>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Wrapper>
        <Title>Lucia Gomez</Title>
      </Wrapper>
      <FeaturedWork />
    </>
  )
}
