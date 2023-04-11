import React from "react"
import Layout from "./components/layout"
import BannerContent from "./components/banner"
import styled from "styled-components"
import Subsection from "./components/subsection"
import { ButtonLink } from "./components/button"
import { featuredProjects } from "./scripts/projectList"
import {
  PortfolioCardDeck,
  makePortfolioCard,
} from "./components/portfolioCardDeck"

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
        <ArchiveButton href="/archive" sameTab={true}>
          Explore the Archive
        </ArchiveButton>
      </Subsection>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <BannerContent>Lucia Gomez</BannerContent>
      <FeaturedWork />
    </Layout>
  )
}
