import PortfolioCardButtons from "./portfolioCardButtons"
import styled from "styled-components"
import { ToolChip } from "../toolChip"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextRenderOptions } from "../../contentful/util"

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
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
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
`

const Body = styled.div`
  padding: 0px 12px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto auto;

  @media screen and (max-width: 576px) {
    padding: 12px 4px;
  }
`

const Title = styled.h4`
  margin: 0;
`

const Metadata = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.medium};

  p {
    margin: 0px;
    margin-left: 4px;
  }
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;

  button {
    margin: 0px 8px 8px 0px;
  }
`

export default function PortfolioArchiveCard({ project, isClient = false }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          image={project.fields.image.fields.file.url}
          centerImage={
            project.fields.centerImage != null
              ? project.fields.centerImage
              : true
          }
        />
      </ImageWrapper>
      <Body>
        <div>
          <Metadata>
            <ion-icon
              name={isClient ? "person" : "today"}
              style={{ fontSize: 16 }}
            ></ion-icon>
            <p>{isClient ? project.fields.clientName : project.fields.date}</p>
          </Metadata>
          <ButtonRow>
            <Title>{project.fields.title}</Title>
            <PortfolioCardButtons
              git={project.fields.sourceFiles}
              extra={project.fields.projectLink}
            />
          </ButtonRow>
          {project.fields.description &&
            documentToReactComponents(
              project.fields.description,
              richTextRenderOptions
            )}
        </div>
        <div>
          {isClient &&
            project.fields.role?.map((tool, idx) => (
              <ToolChip key={idx}>{tool}</ToolChip>
            ))}
          {project.fields.tools.map((tool, idx) => (
            <ToolChip key={idx}>{tool}</ToolChip>
          ))}
        </div>
      </Body>
    </Wrapper>
  )
}
