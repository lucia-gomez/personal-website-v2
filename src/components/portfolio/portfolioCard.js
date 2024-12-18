import PortfolioCardButtons from "./portfolioCardButtons"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  position: relative;
  min-height: 175px;
  min-width: 700px;
  width: 80%;
  margin-bottom: 64px;

  @media screen and (max-width: 870px) {
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: unset;
    grid-template-rows: 200px 1fr;
    width: 100%;
    min-width: unset;
    height: unset;
    margin-bottom: 48px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.accent};
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to left bottom,
      ${props => props.theme.accent} 20%,
      ${props => props.theme.accentHover}
    );
    opacity: 0.4;
    filter: contrast(1.5);
  }
`

const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: ${props =>
    props.centerImage ? "center center" : "bottom left"};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`

const Body = styled.div`
  padding: 0px 12px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto auto;

  p {
    color: ${props => props.theme.medium};
  }

  @media screen and (max-width: 576px) {
    padding: 12px 4px;
  }
`

const Title = styled.h4`
  margin: 0;
`

const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.medium};

  p {
    margin: 0px;
    margin-left: 4px;
  }
`

const ToolChip = styled.p`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.medium};
  color: ${props => props.theme.medium};
  padding: 0px 4px;
  margin: 0px 4px 0px 0px;
  font-size: 0.8rem;
  display: inline-block;
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;

  button {
    margin: 0px 8px 8px 0px;
  }
`

export default function PortfolioArchiveCard({ project }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          image={
            "https://ik.imagekit.io/5xtlzx2c3y/website/portfolio/" +
            project.image
          }
          centerImage={project.centerImage != null ? project.centerImage : true}
        />
      </ImageWrapper>
      <Body>
        <div>
          <Date>
            <ion-icon name="today" style={{ fontSize: 16 }}></ion-icon>
            <p>{project.date}</p>
          </Date>
          <ButtonRow>
            <Title>{project.title}</Title>
            <PortfolioCardButtons git={project.link} extra={project.extra} />
          </ButtonRow>
          {project.text}
        </div>
        <div>
          {project.tools.map((tool, idx) => (
            <ToolChip key={idx}>{tool}</ToolChip>
          ))}
        </div>
      </Body>
    </Wrapper>
  )
}
