import styled from "styled-components"
import { useRef } from "react"
import { ButtonLink } from "../button"

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

  h3 {
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`

export function FeaturedProjectGrid({ children }) {
  return <Grid>{children}</Grid>
}

export function FeaturedProject(props) {
  const { index, project } = props
  const videoRef = useRef()

  return (
    <div style={{ marginBottom: 20 }}>
      <FeaturedWrapper idx={index}>
        {project.featuredImage.includes(".gif") ? (
          <img
            src={project.featuredImage}
            idx={index}
            ref={videoRef}
            alt={project.description}
          />
        ) : (
          <video
            src={project.featuredImage}
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
        <h3>{project.title}</h3>
        {project.featuredText ?? project.text}
      </CaptionWrapper>
      {project.featuredButtonText && (
        <ButtonLink to={project.featuredLink}>
          {project.featuredButtonText}
        </ButtonLink>
      )}
    </div>
  )
}
