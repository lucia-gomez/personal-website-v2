import styled from "styled-components"
import { useRef } from "react"
import { ButtonLink } from "../button"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextRenderOptions } from "../../contentful/util"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FeaturedWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/9;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`

const CaptionWrapper = styled.div`
  p {
    color: ${props => props.theme.medium};
  }

  h4 {
    margin-top: 12px;
  }
`

export function FeaturedProjectGrid({ children }) {
  return <Grid>{children}</Grid>
}

export function FeaturedProject(props) {
  const { index, project } = props
  const videoRef = useRef()

  const mediaUrl = project.fields.media.fields.file.url

  return (
    <div style={{ marginBottom: 20 }}>
      <FeaturedWrapper idx={index}>
        {mediaUrl.includes(".gif") ? (
          <img
            src={mediaUrl}
            idx={index}
            ref={videoRef}
            alt={project.fields.description}
          />
        ) : (
          <video
            src={mediaUrl}
            idx={index}
            ref={videoRef}
            autoPlay
            playsInline
            loop
            muted
          />
        )}
      </FeaturedWrapper>
      <CaptionWrapper>
        <h4>{project.fields.title}</h4>
        {project.fields.description &&
          documentToReactComponents(
            project.fields.description,
            richTextRenderOptions
          )}
      </CaptionWrapper>
      <ButtonLink to={project.fields.actionButtonUrl}>
        {project.fields.actionButtonText}
      </ButtonLink>
    </div>
  )
}
