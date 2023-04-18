import PortfolioCardButtons from "../portfolio/portfolioCardButtons.js"
import { hexToRGB } from "../../style/theme.js"
import styled from "styled-components"

const FeaturedWrapper = styled.div`
  max-height: 80vh;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  margin-top: 20px;

  @media screen and (max-width: 850px) {
    max-height: 80vh;
    max-width: 80vw;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: auto;
    max-height: 70vh;
    max-width: unset;
  }
`

const FeaturedImage = styled.video`
  width: 90vw;
  filter: grayscale(1);
  opacity: 0.4;
  border-radius: 5px;
`

const Caption = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0px;
  padding: 8px;
  backdrop-filter: blur(4px);
  background-color: ${props => hexToRGB(props.theme.medium, 0.8)};

  p {
    margin: 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function FeaturedProject(props) {
  const { project } = props

  return (
    <FeaturedWrapper>
      {/* mobile/tablet */}
      <FeaturedImage
        src={project.featuredImageMobile}
        className="d-lg-none d-md-block"
        autoPlay
        playsInline
        loop
        muted
      />
      {/* desktop */}
      <FeaturedImage
        src={project.featuredImageDesktop}
        className="d-none d-lg-block"
        autoPlay
        playsInline
        loop
        muted
      />
      <Caption>
        <Row>
          <h4>{project.title}</h4>
          <PortfolioCardButtons
            git={project.link ?? null}
            link={project.extra ?? null}
          />
        </Row>
        {project.featuredText ?? project.text}
      </Caption>
    </FeaturedWrapper>
  )
}
