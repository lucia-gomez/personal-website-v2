import React, { useEffect, useState } from "react"

import {
  FeaturedProject,
  FeaturedProjectGrid,
} from "../components/portfolio/featuredProject"
import PortfolioArchiveCard from "../components/portfolio/portfolioCard"
import PortfolioFiltersSection from "../components/portfolio/portfolioFiltersSection"
import ScrollList from "../components/scrollList"
import SectionTitle from "../components/sectionTitle"
import { featuredProjects as featuredProjectsFinder } from "../scripts/projectList"
import filterProject from "../scripts/searchPortfolio"
import projects from "../scripts/projectList"
import styled from "styled-components"

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

const NoResults = styled.p`
  color: ${props => props.theme.medium};
`

const featuredProjects = featuredProjectsFinder([
  "Gentleman Brawlers Joy-O-Meter",
  "Crystal Clear",
  "Sign Search",
])

export default function ArchivePage() {
  const [results, setResults] = useState(projects)
  const [searchKeywords, setSearchKeywords] = useState([])
  const [activeFilter, setActiveFilter] = useState(-1) // all

  const searchProjects = keywords => {
    setSearchKeywords(keywords)
  }

  useEffect(() => {
    // filter by selected category
    let filtered = projects
    if (activeFilter !== -1) {
      filtered = filtered.filter(project =>
        project.categories.includes(activeFilter)
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
        <FeaturedProjectGrid>
          {featuredProjects.map((fp, idx) => (
            <FeaturedProject project={fp} key={idx} index={idx} />
          ))}
        </FeaturedProjectGrid>
        <SectionTitle id="archive">Project Archive</SectionTitle>
        <PortfolioFiltersSection
          {...{ activeFilter, setActiveFilter, searchProjects }}
        />
      </div>
      <CardDeck id="card-deck">
        {results.length === 0 && <NoResults>No results</NoResults>}
        {results.map((project, idx) => (
          <PortfolioArchiveCard project={project} key={idx} />
        ))}
      </CardDeck>
    </Grid>
  )
}
