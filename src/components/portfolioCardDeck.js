import React, { forwardRef } from 'react'
import styled from "styled-components";
import { IconLink } from "../components/externalButton"

export const PortfolioCardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  position: relative;

  @media screen and (max-width: 850px) {
    padding: 20px 5px;
  }
`;


const PortfolioCardWrapper = styled.div`
  width: 400px;
  background-color: ${props => props.theme.bg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
  position: relative;

  @media screen and (max-width: 850px) {
    margin: 0px;
    margin-bottom: 30px;
  }
`;

const PortfolioCardImage = styled.div`
  height: 20rem;
  max-height: 200px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  background-image: url(${props => props.image});
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 850px) {
    max-height: 200px;
  }
`;

const PortfolioCardContent = styled.div`
  height: 300px;
  margin: 20px 30px;
  max-width: 660px;
  text-align: left;
  display: grid;
  grid-template-rows: auto 40px 20px 1fr auto;
  
  h4 {
    max-width: 78%;
  }

  span {
    font-weight: 700;
    background-color: ${props => props.theme.accentLight};
    border-radius: 5px;
    padding: 0px 3px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const PortfolioCardButtons = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  flex-direction: row;
`;

const PortfolioCardDivider = styled.span`
  display: inline-block;
  width: 50px;
  height: 5px;
  background-color: ${props => props.theme.accent}!important;
`;

const PortfolioCardTags = styled.div`
  padding-top: 20px;
  position: absolute;
  bottom: 5px;
  text-align: left;
`;

const PortfolioCardTag = styled.span`
  background-color: ${props => props.theme.medium};
  margin-bottom: 5px;
  margin-right: 5px;
  display: inline-block;
  width: max-content;
`;

const GitLink = styled(IconLink)`
  margin-bottom: 0.5rem;
  margin-top: -2px;
`;

export function makePortfolioCard(project, key) {
  return (
    <PortfolioCard
      title={project.title}
      date={project.date}
      tools={project.tools}
      image={project.image}
      git={project.link ?? null}
      link={project.extra ?? null}
      myKey={key}
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
    <PortfolioCardWrapper key={props.myKey} ref={ref}>
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