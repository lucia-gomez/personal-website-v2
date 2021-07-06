import React, { forwardRef } from "react"
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

export function makePortfolioCard(project, key) {
  return (
    <PortfolioCard
      title={project.title}
      date={project.date}
      tools={project.tools}
      image={project.image}
      git={project.link ?? null}
      link={project.extra ?? null}
      key={key}
    >
      {project.text}
    </PortfolioCard>
  );
}

const PortfolioCard = forwardRef((props, ref) => {
  const githubIcon = (props.git ?
    <GitLink href={props.git ?? ''}>
      <div className='material-icons'>
        <i className="fa fa-github"></i>
      </div>
    </GitLink >
    : null);

  return (
    <PortfolioCardWrapper key={props.key} ref={ref}>
      <PortfolioCardImage image={props.image} />
      <PortfolioCardContent>
        <Row>
          <h4>{props.title}</h4>
          <PortfolioCardButtons>
            {githubIcon}
            {props.link}
          </PortfolioCardButtons>
        </Row>
        <p>{props.date}</p>
        <PortfolioCardDivider />
        {props.children}
        <PortfolioCardTags>
          {props.tools.map((tool, index) => (
            <PortfolioCardTag key={index}>{tool}</PortfolioCardTag>
          ))}
        </PortfolioCardTags>
      </PortfolioCardContent>
    </PortfolioCardWrapper>
  );
})
