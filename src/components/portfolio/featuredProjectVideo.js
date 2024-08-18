import styled from "styled-components"

const Wrapper = styled.div`
  margin: 20px;
  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;
  filter: contrast(1.25);

  &.hidden {
    visibility: hidden;
  }

  @media screen and (max-width: 870px) {
    position: absolute;
    right: -15%;
    top: ${props => (props.idx % 2 === 0 ? 97 : 75)}%;
    margin: 0px;
  }

  @media screen and (max-width: 576px) {
    right: 0;
    top: ${props => (props.idx % 2 === 0 ? 97 : 94)}%;
  }

  // color overlay
  ::after {
    content: "";
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg);
    width: 100%;
    height: calc(100%);
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      ${props => (props.idx % 2 === 0 ? "to left bottom" : "to right bottom")},
      ${props => props.theme.accent} 40%,
      ${props => props.theme.accentHover} 90%
    );
    opacity: 0.5;
    max-width: 70vw;
    max-height: 70vh;

    @media screen and (max-width: 576px) {
      height: calc(100% - 6px);
    }
  }
`

const Video = styled.video`
  max-height: 60vh;
  max-width: 70vw;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.accent};
  box-shadow: ${props => (props.idx % 2 === 0 ? 6 : -6)}px -6px 0px 0px ${props => props.theme.accent};
  position: relative;
  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg);

  @media screen and (max-width: 870px) {
    max-width: 50vw;
    box-shadow: none;
  }

  @media screen and (max-width: 576px) {
    max-width: 70vw;
  }
`

export default function FeaturedVideo(props) {
  const { project, index, scrollRef, inView, videoRef } = props

  const getClassName = () => {
    if (!inView) return "hidden"
    return index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
  }

  return (
    <Wrapper
      className={`animate__animated ${getClassName()}`}
      ref={scrollRef}
      idx={index}
    >
      {/* mobile/tablet */}
      <Video
        src={project.featuredImageMobile}
        idx={index}
        ref={videoRef}
        className="d-lg-none d-md-block"
        autoPlay
        playsInline
        loop
        muted
      />
      {/* desktop */}
      <Video
        src={project.featuredImageDesktop}
        idx={index}
        ref={videoRef}
        className="d-none d-lg-block"
        autoPlay
        playsInline
        loop
        muted
      />
    </Wrapper>
  )
}
