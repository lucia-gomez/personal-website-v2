import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from "../components/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import { PortfolioCardDeck, makePortfolioCard } from "../components/portfolioCardDeck"
import SearchBar from '../components/searchBar'
import projects, { category } from "../scripts/projectList"
import { useTransition, animated } from '@react-spring/web'

const ArchiveWrapper = styled.div`
  padding: 0px 30px;
`;

const Advanced = styled.div`
  color: ${props => props.theme.accent};
  cursor: pointer;
  margin: auto;
  width: fit-content;
  margin-top: 10px;
  display: flex;
  align-items: center;

  i {
    padding-right: 5px;
    transform: ${props => (props.showAdvanced ? `rotate(90deg) translateX(3px) translateY(3px)` : '')};
    transition: transform 200ms ease-in;
  }
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

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
`;

const FilterItemContainer = styled.div`
  padding: 0px 5px;
  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.textLight};
  }
`;

const FilterItem = styled.span`
  border-radius: 10px;
  background-color: ${props => props.active === 'true' ? props.theme.accent : props.theme.medium};
  color: ${props => props.active === 'true' ? props.theme.textInv : props.theme.accent};
  padding: 0px 5px;
  cursor: pointer;
`;

const Filters = ({ active, setActive }) => {
  return (
    <FilterRow>
      Project category:
      {Object.entries(category).map(([catName, catNum], idx) =>
        <FilterItemContainer key={idx}>
          <FilterItem
            active={active === catNum ? "true" : "false"}
            onClick={() => setActive(catNum)}
          >
            {catName}
          </FilterItem>
        </FilterItemContainer>
      )}
    </FilterRow>
  );
}

export default function ArchivePage() {
  const [results, setResults] = useState(projects);
  const [searchKeywords, setSearchKeywords] = useState([]);
  const [activeFilter, setActiveFilter] = useState(-1); // all
  const [showAdvanced, setShowAdvanced] = useState(false);

  const searchProjects = keywords => {
    setSearchKeywords(keywords);
  }

  const projectTransition = useTransition(results, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 625 },
    leave: { opacity: 0, maxHeight: 0 },
  });

  const advancedTransition = useTransition(showAdvanced, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 625 },
    leave: { opacity: 0, maxHeight: 0 },
  });

  useEffect(() => {
    // filter by selected category
    let filtered = projects;
    if (activeFilter !== -1) {
      filtered = filtered.filter(project => project.categories.includes(activeFilter));
    }

    // filter by search keywords
    if (searchKeywords.length === 0) {
      setResults(filtered);
    } else {
      filtered = filtered.filter(project => filterProject(project, searchKeywords));
      setResults(filtered);
    }
  }, [activeFilter, searchKeywords]);

  const advancedButton = (
    <Advanced onClick={() => setShowAdvanced(!showAdvanced)} {...{ showAdvanced }}>
      <i className={`fas ${showAdvanced ? 'fa-chevron-right' : 'fa-chevron-right'}`}></i>
      Advanced filters
    </Advanced>
  );

  return (
    <Layout>
      <Section id="archive" index={0}>
        <ArchiveWrapper>
          {SectionTitle("Things I've Made")}
          <p>Vaguely organized in reverse chronological order, but mostly in order of how badly I want to show off each project</p>
          <SearchBar callback={searchProjects} placeholder="Ex: React, drink" />
          {advancedButton}
          {advancedTransition((style, item) =>
            <animated.div style={style}>
              {item && <Filters active={activeFilter} setActive={setActiveFilter} />}
            </animated.div>
          )}
          <PortfolioCardDeck>
            {projectTransition((style, project) =>
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