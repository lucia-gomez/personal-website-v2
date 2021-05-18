import React from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import { PortfolioCardDeck, makePortfolioCard } from "../components/portfolioCardDeck";
import projects from "../scripts/projectList"

const ArchiveWrapper = styled.div`
  padding: 0px 30px;
`;

export default function ArchivePage() {
  return (
    <Layout>
      <Section id="archive" index={0}>
        <ArchiveWrapper>
          {SectionTitle("Things I've Made")}
          <p>Vaguely organized in reverse chronological order, but mostly in order of how badly I want to show off each project</p>
          <PortfolioCardDeck>
            {projects.map(makePortfolioCard)}
          </PortfolioCardDeck>
        </ArchiveWrapper>
      </Section>
    </Layout>
  );
}