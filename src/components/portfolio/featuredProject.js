import FeaturedVideo from "./featuredProjectVideo"
import FeaturedVideoCaption from "./featuredProjectCaption"
import styled from "styled-components"

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

export default function FeaturedProject(props) {
  const { index } = props

  return (
    <FeaturedWrapper idx={index}>
      <FeaturedVideoCaption {...props} />
      <FeaturedVideo {...props} />
    </FeaturedWrapper>
  )
}
