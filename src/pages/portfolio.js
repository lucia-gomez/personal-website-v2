import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/subsection"
import Button from "../components/button"
import { featuredProjects } from "../scripts/projectList"
import { PortfolioCardDeck, makePortfolioCard } from "../components/portfolioCardDeck"

const ArchiveButton = styled(Button)`
  margin: auto;
  margin-top: 20px;
`;

export default function PortfolioSection() {
  const projects = featuredProjects(["Spotify Vibe Check", "Sign Search", "Our Power Hour"]);
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