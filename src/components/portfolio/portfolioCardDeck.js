import React from "react"
import styled from "styled-components"
import { IconLink } from "../externalButton"
import { hexToRGB } from "../../style/theme"

export const PortfolioCardDeck = styled.div`
  overflow-y: scroll;
  position: relative;
  padding-right: 8px;
`

const PortfolioCardWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  border-radius: 5px;
  margin-bottom: 8px;
  position: relative;

  @media screen and (max-width: 850px) {
    grid-template-columns: 4fr 9fr;
    height: unset;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: unset;
    grid-template-rows: 150px 1fr;
    margin-bottom: 30px;
    box-shadow: -2px 2px 6px ${props => props.theme.bg};
  }
`

const PortfolioCardImage = styled.div`
  width: 100%;
  border-radius: 5px 0px 0px 5px;
  background-image: url(${props => props.image});
  background-position: ${props =>
    props.centerImage ? "top center" : "top left"};
  background-size: cover;
  background-repeat: no-repeat;
  mix-blend-mode: luminosity;

  @media only screen and (max-width: 576px) {
    border-radius: 5px 5px 0px 0px;
  }
`

const PortfolioCardContent = styled.div`
  padding: 10px;
  text-align: left;
  display: grid;
  grid-template-rows: 40px 1fr auto;

  @media only screen and (max-width: 576px) {
    height: fit-content;
    grid-template-rows: auto 1fr auto;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding-bottom: 12px;

    h5 {
      margin: 0;
    }
  }
`

const PortfolioCardButtons = styled.div`
  display: flex;
  flex-direction: row;
`

const PortfolioCardTitle = styled.h5`
  width: fit-content;
`

const PortfolioCardDate = styled.h5`
  color: ${props => hexToRGB(props.theme.text, 0.2)};
  margin: 0px 8px;
`

const PortfolioCardTag = styled.span`
  border-radius: 5px;
  background-color: ${props => hexToRGB(props.theme.accent, 0.4)};
  color: ${props => props.theme.textInv};
  padding: 0px 4px;
  margin-right: 8px;
  display: inline-block;
  width: max-content;
  font-size: 14px;
`

const GitLink = styled(IconLink)`
  margin-bottom: 0.5rem;
  margin-top: -2px;
`

export function makePortfolioCard(project) {
  return (
    <PortfolioCard
      title={project.title}
      date={project.date}
      tools={project.tools}
      image={"https://ik.imagekit.io/5xtlzx2c3y/portfolio/" + project.image}
      centerImage={project.centerImage != null ? project.centerImage : true}
      git={project.link ?? null}
      link={project.extra ?? null}
      key={project.title}
    >
      {project.text}
    </PortfolioCard>
  )
}

const PortfolioCard = props => {
  const githubIcon = props.git ? (
    <GitLink href={props.git ?? ""}>
      <div className="material-icons">
        <i className="fa fa-github"></i>
      </div>
    </GitLink>
  ) : null

  return (
    <PortfolioCardWrapper>
      <PortfolioCardImage image={props.image} centerImage={props.centerImage} />
      <PortfolioCardContent>
        <Row>
          <Header>
            <PortfolioCardTitle>{props.title}</PortfolioCardTitle>
            <PortfolioCardDate>{props.date}</PortfolioCardDate>
          </Header>
          <PortfolioCardButtons>
            {githubIcon}
            {props.link}
          </PortfolioCardButtons>
        </Row>
        {props.children}
        <div>
          {props.tools.map((tool, index) => (
            <PortfolioCardTag key={index}>{tool}</PortfolioCardTag>
          ))}
        </div>
      </PortfolioCardContent>
    </PortfolioCardWrapper>
  )
}
