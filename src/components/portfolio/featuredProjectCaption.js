import FeaturedProjectActionButton from "./featuredProjectActionButton"
import FeaturedProjectAudioButton from "./featuredProjectAudioButton"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  width: 45vw;
  bottom: -15%;
  ${props => (props.idx % 2 === 0 ? "left: 20%" : "right: 20%")};
  z-index: 1;

  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;

  &.hidden {
    visibility: hidden;
  }

  @media screen and (max-width: 870px) {
    position: relative;
    width: 82vw;
    right: unset;
    ${props => (props.idx % 2 === 0 ? "left: 0%" : "left: 0%")};
    z-index: 0;
  }
`

const Content = styled.div`
  background-color: ${props => props.theme.bg};
  box-shadow: ${props => (props.idx % 2 === 0 ? 6 : -6)}px -6px 0px 0px ${props => props.theme.accent};
  border: 1px solid ${props => props.theme.accent};
  border-radius: 5px;
  padding: 20px;
  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg);

  p {
    margin: 0;
  }

  button {
    margin-top: 20px;
  }
`

export default function FeaturedVideoCaption(props) {
  const { project, index, scrollRef, inView, videoRef } = props

  const getClassName = () => {
    if (!inView) return "hidden"
    return index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
  }

  return (
    <Wrapper
      className={`animate__animated ${getClassName()}`}
      ref={scrollRef}
      idx={index}
    >
      <Content idx={index}>
        <h2>{project.title}</h2>
        {project.featuredText ?? project.text}
        <FeaturedProjectActionButton {...{ project, index }} />
        {project.featuredHasAudio === true && (
          <FeaturedProjectAudioButton {...{ index, videoRef }} />
        )}
      </Content>
    </Wrapper>
  )
}
