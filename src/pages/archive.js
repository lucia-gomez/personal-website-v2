import {
  PortfolioCardDeck,
  makePortfolioCard,
} from "../components/portfolio/portfolioCardDeck"
import React, { useEffect, useRef, useState } from "react"

import AnimationOnScroll from "react-animate-on-scroll"
import Layout from "../components/layout/layout"
import PortfolioFiltersSection from "../components/portfolio/portfolioFiltersSection"
import SectionTitle from "../components/sectionTitle"
import filterProject from "../scripts/searchPortfolio"
import { isScrolledIntoViewVertical } from "../scripts/util"
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

function resetAnimation(element) {
  element.style.animationName = "none"
  requestAnimationFrame(() => {
    setTimeout(() => {
      element.style.animationName = ""
    }, 0)
  })
}

export default function ArchivePage() {
  const [results, setResults] = useState(projects)
  const [searchKeywords, setSearchKeywords] = useState([])
  const [activeFilter, setActiveFilter] = useState(-1) // all
  const [isMobile] = useState(window.innerWidth <= 576)
  const cardDeckRef = useRef()

  const searchProjects = keywords => {
    setSearchKeywords(keywords)
  }

  useEffect(() => {
    if (cardDeckRef.current == null) return
    const cards = cardDeckRef?.current.children
    let numVisible = 0
    for (let card of cards) {
      if (
        !(isMobile && numVisible > 3) &&
        isScrolledIntoViewVertical(cardDeckRef.current, card, true)
      ) {
        const delay = ++numVisible * 500 * Math.pow(0.9, numVisible)
        card.style.animationDelay = delay + "ms"
        card.style.animationDuration = "1s"
        // reset animation delay when done
        setTimeout(() => {
          card.style.animationDelay = "unset"
        }, delay + 1000)
      }
    }
  }, [isMobile])

  useEffect(() => {
    if (cardDeckRef.current == null) return
    const cards = cardDeckRef.current.children
    for (let card of cards) {
      resetAnimation(card)
    }

    // MASSIVE hack, trigger a scroll to forece new elements animateIn
    cardDeckRef.current.scrollBy(0, 1)
    cardDeckRef.current.scrollBy(0, -1)
  }, [results])

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

  const animatedCard = (project, idx) => {
    const innerStyle = results.includes(project)
      ? { height: "initial", display: "initial" }
      : { height: 0, display: "none" }
    return (
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        duration={0.2}
        animateOnce
        animatePreScroll
        offset={-50}
        scrollableParentSelector={isMobile ? "" : "#card-deck"}
        key={idx}
      >
        <div style={innerStyle}>{makePortfolioCard(project)}</div>
      </AnimationOnScroll>
    )
  }

  return (
    <Layout>
      <Grid>
        <div>
          <SectionTitle>Things I've Made</SectionTitle>
          <p>
            Dive into my project archive. Use the filters to help sift through
            the chaos
          </p>
          <PortfolioFiltersSection
            {...{ activeFilter, setActiveFilter, searchProjects }}
          />
        </div>
        <PortfolioCardDeck id="card-deck" ref={cardDeckRef}>
          {projects.map((project, idx) => animatedCard(project, idx))}
        </PortfolioCardDeck>
      </Grid>
    </Layout>
  )
}
