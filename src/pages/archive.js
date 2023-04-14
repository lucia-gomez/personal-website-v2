import React, { useState, useEffect } from "react"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import {
  PortfolioCardDeck,
  makePortfolioCard,
} from "../components/portfolio/portfolioCardDeck"
import projects from "../scripts/projectList"
import filterProject from "../scripts/searchPortfolio"
import { useTransition, animated } from "@react-spring/web"
import PortfolioFiltersSection from "../components/portfolio/portfolioFiltersSection"
import PortfolioItem from "../components/portfolio/portfolioItem"

export default function ArchivePage() {
  const [results, setResults] = useState(projects)
  const [searchKeywords, setSearchKeywords] = useState([])
  const [activeFilter, setActiveFilter] = useState(-1) // all

  const searchProjects = keywords => {
    setSearchKeywords(keywords)
  }

  const projectTransition = useTransition(results, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 625 },
    leave: { opacity: 0, maxHeight: 0 },
  })

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
    <Layout>
      <div style={{ padding: "75px 20px 50px 20px" }}>
        {SectionTitle("Things I've Made")}
        <p>
          Dive into my project archive. Use the filters to help sift through the
          chaos
        </p>
        <PortfolioFiltersSection
          {...{ activeFilter, setActiveFilter, searchProjects }}
        />
        {/* {projectTransition((style, project, _, index) => (
          <animated.div style={style}>
            <PortfolioItem {...{ index, project }} />
          </animated.div>
        ))} */}
        <PortfolioCardDeck>
          {projectTransition((style, project) => (
            <animated.div style={style}>
              {makePortfolioCard(project)}
            </animated.div>
          ))}
        </PortfolioCardDeck>
      </div>
    </Layout>
  )
}
