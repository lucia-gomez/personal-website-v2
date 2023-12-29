import { RoundButton } from "../button"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

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
    ${props => (props.idx % 2 === 0 ? "left: 0%" : "right: 0%")};
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

export default function FeaturedVideoCaption(props) {
  const { project, index } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  })

  const getClassName = () => {
    if (!inView) return "hidden"
    return index % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
  }

  return (
    <Wrapper
      className={`animate__animated ${getClassName()}`}
      ref={ref}
      idx={index}
    >
      <Content idx={index}>
        <h2>{project.title}</h2>
        {project.featuredText ?? project.text}
        {/* {project.featuredButton} */}
        <ActionButton to="/subscribe" sameTab={false} idx={index}>
          <i className="fas fa-envelope" />
        </ActionButton>
      </Content>
    </Wrapper>
  )
}
