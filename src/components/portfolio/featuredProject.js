import { RoundButton } from "../button"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const FeaturedWrapper = styled.div`
  max-height: 70vh;
  position: relative;
  border-radius: 5px;
  margin-bottom: 25svh;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.idx % 2 === 0 ? "flex-end" : "flex-start"};

  @media screen and (max-width: 850px) {
    max-height: 80svh;
    max-width: 80vw;
    margin-bottom: 300px;
    margin-top: 100px;
    justify-content: ${props =>
      props.idx % 2 === 0 ? "flex-start" : "flex-end"};
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    max-height: 75svh;
    max-width: unset;
  }
`

const VideoWrapper = styled.div`
  margin: 20px;
  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;

  &.hidden {
    visibility: hidden;
  }

  @media screen and (max-width: 870px) {
    position: absolute;
    ${props => (props.idx % 2 === 0 ? "right: 0%" : "left: 0%")};
    top: 97%;
    margin: 0px;
  }

  // color overlay
  ::after {
    content: "";
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg);
    width: 100%;
    height: calc(100%); // literally no idea where the 40px came from
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

const CaptionWrapper = styled.div`
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
    ${props => (props.idx % 2 === 0 ? "left: 0%" : "right: 0%")};
    z-index: 0;
  }
`

const FeaturedVideo = styled.video`
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

const Caption = styled.div`
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

const ActionButton = styled(RoundButton)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 75px;
  height: 75px;
  margin: 0 !important;
  transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
    translate(30%, -50%);

  :hover {
    transform: skewY(${props => (props.idx % 2 === 0 ? 4 : -4)}deg)
      translate(30%, -50%) scale(1.1);
  }
`

export default function FeaturedProject(props) {
  const { project, index } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  })

  const getClassName = () => {
    if (!inView) return "hidden"
    return index % 2 === 0 ? "animate__fadeInRight" : "animate__fadeInLeft"
  }

  const getClassNameCaption = () => {
    if (!inView) return "hidden"
    return index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
  }

  return (
    <FeaturedWrapper idx={index}>
      {/* mobile/tablet */}
      <CaptionWrapper
        className={`animate__animated ${getClassNameCaption()}`}
        ref={ref}
        idx={index}
      >
        <Caption idx={index}>
          <h2>{project.title}</h2>
          {project.featuredText ?? project.text}
          {/* {project.featuredButton} */}
          <ActionButton to="/subscribe" sameTab={false} idx={index}>
            <i className="fas fa-envelope" />
          </ActionButton>
        </Caption>
      </CaptionWrapper>
      <VideoWrapper
        className={`animate__animated ${getClassName()}`}
        ref={ref}
        idx={index}
      >
        <FeaturedVideo
          src={project.featuredImageMobile}
          idx={index}
          className="d-lg-none d-md-block"
          autoPlay
          playsInline
          loop
          muted
        />
        {/* desktop */}
        <FeaturedVideo
          src={project.featuredImageDesktop}
          idx={index}
          className="d-none d-lg-block"
          playsInline
          loop
          autoPlay
          muted
        />
      </VideoWrapper>
    </FeaturedWrapper>
  )
}
