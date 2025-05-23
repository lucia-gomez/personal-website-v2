import React, { useEffect, useState } from "react"

import {
  FeaturedProject,
  FeaturedProjectGrid,
} from "../components/portfolio/featuredProject"
import PortfolioArchiveCard from "../components/portfolio/portfolioCard"
import PortfolioFiltersSection from "../components/portfolio/portfolioFiltersSection"
import ScrollList from "../components/scrollList"
import SectionTitle from "../components/sectionTitle"
import filterProject from "../scripts/searchPortfolio"
import portfolio from "../contentful/portfolio.json"
import styled from "styled-components"
import useContentfulPreview from "../contentful/useContentfulPreview"

const Grid = styled.div`
  padding: 95px 10px 50px 20px;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-x: hidden;

  @media screen and (max-width: 576px) {
    padding-right: 20px;
    height: 100%;
  }

  @media screen and (max-width: 576px) {
    h1,
    h2,
    h3 {
      font-size: 28px;
    }
  }
`

const CardDeck = styled(ScrollList)`
  overflow: hidden;
`

const Gray = styled.p`
  color: ${props => props.theme.medium};
`

export default function ArchivePage() {
  const [results, setResults] = useState(portfolio.fields.projects)
  const [searchKeywords, setSearchKeywords] = useState([])
  const [activeFilter, setActiveFilter] = useState("All")
  const previewProject = useContentfulPreview()

  const searchProjects = keywords => {
    setSearchKeywords(keywords)
  }

  useEffect(() => {
    // filter by selected category
    let filtered = portfolio.fields.projects
    if (activeFilter !== "All") {
      filtered = filtered.filter(project =>
        project.fields.categories.includes(activeFilter)
      )
    }
    // filter by search keywords
    if (searchKeywords.length === 0) {
      setResults(filtered)
    } else {
      filtered = filtered.filter(project =>
        filterProject(project, searchKeywords)
      )
      setResults(filtered)
    }
  }, [activeFilter, searchKeywords])

  return (
    <Grid>
      <div>
        <SectionTitle>Featured Work</SectionTitle>
        <FeaturedProjectGrid>
          {portfolio.fields.featuredProjects.map((fp, idx) => (
            <FeaturedProject project={fp} key={idx} index={idx} />
          ))}
        </FeaturedProjectGrid>
        <SectionTitle id="archive" style={{ marginBottom: 8 }}>
          Project Archive
        </SectionTitle>
        <Gray>
          Everything I've ever made, all at once. Here there be dragons.
        </Gray>
        <PortfolioFiltersSection
          {...{ activeFilter, setActiveFilter, searchProjects }}
        />
      </div>
      <CardDeck id="card-deck">
        {results.length === 0 && <Gray>No results</Gray>}
        {previewProject && <PortfolioArchiveCard project={previewProject} />}
        {results.map((project, idx) => (
          <PortfolioArchiveCard project={project} key={idx} />
        ))}
      </CardDeck>
    </Grid>
  )
}
