import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionWrapper = styled.section.attrs(props => ({
  id: props.id
}))`
  max-height: fit-content;
  min-height: 100vh;
  padding: 10vh 0px 10vw 0px;
  position: relative;

  svg:not(.tool-icon) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
  }
`;

const EvenSection = styled(SectionWrapper)`
  background-color: ${props => props.theme.medium};
  svg:not(.tool-icon) {
    fill: ${props => props.theme.bg};
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5));
  }
`;

const OddSection = styled(SectionWrapper)`
  background-color: ${props => props.theme.bg};
  svg:not(.tool-icon) {
    fill: ${props => props.theme.medium};
    filter: drop-shadow(5px 0px 5px rgba(0, 0, 0, 0.5));
  }
`;

const SectionContent = styled.div`
  max-width: 1800px;
  margin: auto;
  text-align: center;

  @media only screen and (max-width: 576px) {
    padding-bottom: 7vh;
  }
`;

const Section = props => {
  const isEven = props.index % 2 === 0;

  const content = (
    <>
      <SectionContent className={props.className}>
        {props.children}
      </SectionContent>
      <svg viewBox="0 0 5 5" preserveAspectRatio="none">
        <polygon points={"0,5 5,5" + (isEven ? " 5,0" : " 0,0")} />
      </svg>
    </>
  )
  return isEven ?
    <EvenSection {...props}>{content}</EvenSection> :
    <OddSection {...props}>{content}</OddSection>
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section;