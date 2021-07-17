import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import { PortfolioCardDeck, makePortfolioCard } from "../components/portfolioCardDeck"
import SearchBar from '../components/searchBar'
import projects from "../scripts/projectList"
import { useTransition, animated } from '@react-spring/web'

const ArchiveWrapper = styled.div`
  padding: 0px 30px;
`;

const searchableFields = ["title", "date", "tools", "text", "tags"];

function toStringRec(obj) {
  if (typeof obj === 'string')
    return obj
  else if (typeof obj.props.children === 'string')
    return obj.props.children;
  else {
    return obj.props.children.map(o => toStringRec(o)).join(" ");
  }
}

/** Check if a project contains a certain keyword */
function filterProjectKeyword(project, keyword) {
  for (let field of searchableFields) {
    let content = project[field] ?? null;
    if (content === null)
      continue;

    if (field === "tools" || field === "tags") {
      content = content.join(" ");
    } else if (field === "text") {
      content = toStringRec(content);
    }

    if (content.toLowerCase().includes(keyword.toLowerCase()))
      return true;
  }
  return false;
}

/** Check if a project contains all keywords */
function filterProject(project, keywords) {
  const keywordHits = keywords.map(keyword => filterProjectKeyword(project, keyword));
  return keywordHits.every(x => x);
}

export default function ArchivePage() {
  const [results, setResults] = useState(projects);

  const searchProjects = keywords => {
    if (keywords.length === 0) {
      setResults(projects);
    } else {
      const filtered = projects.filter(project => filterProject(project, keywords));
      setResults(filtered);
    }
  }

  const trans = useTransition(results, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 575 },
    leave: { opacity: 0, maxHeight: 0 },
  });

  return (
    <Layout>
      <Section id="archive" index={0}>
        <ArchiveWrapper>
          {SectionTitle("Things I've Made")}
          <p>Vaguely organized in reverse chronological order, but mostly in order of how badly I want to show off each project</p>
          <SearchBar callback={searchProjects} placeholder="Ex: React, drink" />
          <PortfolioCardDeck>
            {trans((style, project) =>
              <animated.div style={style}>
                {makePortfolioCard(project)}
              </animated.div>
            )}
          </PortfolioCardDeck>
        </ArchiveWrapper>
      </Section>
    </Layout>
  );
}