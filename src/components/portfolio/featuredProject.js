import FeaturedVideo from "./featuredProjectVideo"
import FeaturedVideoCaption from "./featuredProjectCaption"
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
    justify-content: flex-start;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    max-height: 75svh;
    max-width: unset;
  }
`

export default function FeaturedProject(props) {
  const { index } = props
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `${window.innerWidth > 800 ? -400 : 0}px 0px`,
  })

  return (
    <FeaturedWrapper idx={index}>
      <FeaturedVideoCaption {...props} scrollRef={ref} inView={inView} />
      <FeaturedVideo {...props} scrollRef={ref} inView={inView} />
    </FeaturedWrapper>
  )
}
