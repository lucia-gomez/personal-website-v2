import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 20px;
  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;

  &.hidden {
    visibility: hidden;
  }

  @media screen and (max-width: 870px) {
    position: absolute;
    right: 0;
    top: 97%;
    margin: 0px;
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
    background: ${props => hexToRGB(props.theme.accentHover, 0.3)};
    filter: contrast(2);
    max-width: 70vw;
    max-height: 70vh;

    @media screen and (max-width: 870px) {
      height: calc(100% - 6px);
    }
  }

  /* ::after {
    content: "";
    width: 150px;
    height: 150px;
    border-radius: 100px;
    background-color: ${props => props.theme.accent};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg);
  }

  :hover::after {
    background-color: ${props => props.theme.accentHover};
  } */
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
    max-width: 70vw;
    box-shadow: none;
  }
`

export default function FeaturedVideo(props) {
  const { project, index, scrollRef, inView } = props

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
        className="d-none d-lg-block"
        autoPlay
        playsInline
        loop
        muted
      />
    </Wrapper>
  )
}
