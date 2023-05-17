import React, { useEffect, useState } from "react"

import PortfolioFiltersSection from "../components/portfolio/portfolioFiltersSection"
import ScrollList from "../components/scrollList"
import SectionTitle from "../components/sectionTitle"
import filterProject from "../scripts/searchPortfolio"
import { makePortfolioCard } from "../components/portfolio/portfolioCardDeck"
import projects from "../scripts/projectList"
import styled from "styled-components"

const Grid = styled.div`
  height: 100vh;
  padding: 75px 10px 50px 20px;
  display: grid;
  grid-template-rows: auto 1fr;

  @media screen and (max-width: 576px) {
    padding-right: 20px;
    height: 100%;
  }
`

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
        <SectionTitle>Things I've Made</SectionTitle>
        <p>
          Dive into my project archive. Use the filters to help sift through the
          chaos
        </p>
        <PortfolioFiltersSection
          {...{ activeFilter, setActiveFilter, searchProjects }}
        />
      </div>
      <ScrollList id="card-deck">
        {results.map(project => makePortfolioCard(project))}
      </ScrollList>
    </Grid>
  )
}
