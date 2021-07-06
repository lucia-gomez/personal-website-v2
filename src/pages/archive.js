import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import { PortfolioCardDeck, makePortfolioCard } from "./portfolio"
import SearchBar from '../components/searchBar'
import FlipMove from 'react-flip-move'
import projects from "../scripts/projectList"

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

  return (
    <Layout>
      <Section id="archive" index={0}>
        <ArchiveWrapper>
          {SectionTitle("Things I've Made")}
          <p>Vaguely organized in reverse chronological order, but mostly in order of how badly I want to show off each project</p>
          <SearchBar callback={searchProjects} />
          <PortfolioCardDeck>
            <FlipMove
              typeName={null}
              ease="cubic-bezier(0.39,0,0.45,1.4)"
              enterAnimation="fade"
              leaveAnimation="fade"
              duration={500}
              staggerDurationBy={22}

            >
              {results.map(makePortfolioCard)}
            </FlipMove>
          </PortfolioCardDeck>
        </ArchiveWrapper>
      </Section>
    </Layout>
  );
}