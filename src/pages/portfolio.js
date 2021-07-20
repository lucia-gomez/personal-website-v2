import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import { ButtonLink } from "../components/button"
import { featuredProjects } from "../scripts/projectList"
import { PortfolioCardDeck, makePortfolioCard } from "../components/portfolioCardDeck"

const ArchiveButton = styled(ButtonLink)`
  margin: auto;
  margin-top: 20px;
`;

export default function PortfolioSection() {
  const projects = featuredProjects(["Our Power Hour", "Cards Against Cornellians 2.0", "Sign Search"]);
  return (
    <>
      {SectionTitle("Things I've Made")}
      <Subsection title="Featured">
        <PortfolioCardDeck>
          {projects.map(makePortfolioCard)}
        </PortfolioCardDeck>
        <ArchiveButton href="/archive" sameTab={true}>Explore the Archive</ArchiveButton>
      </Subsection>
    </>
  )
}
