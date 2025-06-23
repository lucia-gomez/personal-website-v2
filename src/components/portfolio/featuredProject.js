import styled from "styled-components"
import { useMemo, useRef, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextRenderOptions } from "../../contentful/util"
import { ToolChip } from "../toolChip"
import { ButtonLink } from "../button"
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 60px;
  padding: 20px;
  align-items: start;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
    padding: 8px;
  }

  h1 {
    font-size: 3rem !important;
    margin: 0;
  }
`

const MediaGrid = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-gap: 12px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
  height: 30%;
`

const FeaturedWrapper = styled.div`
  width: 100%;
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
  }
`

const MediaPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/9;
  border: ${props => (props.selected ? `4px ${props.theme.accent} solid` : "")};
  cursor: pointer;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 99%;
  }
`

const CaptionWrapper = styled.div`
  height: 100%;
  width: 80%;
  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1400px) {
    width: 100%;
    p {
      font-size: 1rem;
    }
  }

  h4 {
    margin-top: 12px;
  }
`

const Chips = styled.div`
  margin-bottom: 20px;
  margin-top: 4px;

  p {
    font-size: 1rem;
  }
`

const Roles = styled.div`
  border-left: 4px ${props => props.theme.accent} solid;
  padding-left: 20px;
  margin-top: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin: 8px 0px;
  }

  p {
    margin: 0;
    font-weight: 100;
    font-size: 1rem;
    color: ${props => props.theme.medium};
  }
`

export function FeaturedProjectGrid({ children }) {
  return <div>{children}</div>
}

export function FeaturedProject(props) {
  const { index, project } = props
  const [selected, setSelected] = useState(0)
  const selectedMediaUrl = useMemo(
    () => project.fields.media[selected].fields.file.url,
    [selected, project.fields.media]
  )

  const videoRef = useRef()
  const isMobile = useCheckMobileScreen()

  const isClient =
    project.fields.project.sys.contentType.sys.id.includes("client")

  const mediaGrid = (
    <MediaGrid>
      <FeaturedWrapper idx={index}>
        {!selectedMediaUrl.includes(".mp4") ? (
          <img
            src={selectedMediaUrl}
            idx={index}
            ref={videoRef}
            alt={project.fields.description}
          />
        ) : (
          <video
            src={selectedMediaUrl}
            idx={index}
            ref={videoRef}
            autoPlay
            playsInline
            loop
          />
        )}
      </FeaturedWrapper>
      <Row>
        {project.fields.media.map((media, idx) => (
          <div key={idx}>
            <MediaPreview
              selected={idx === selected}
              onClick={() => setSelected(idx)}
            >
              {!media.fields.file.url.includes(".mp4") ? (
                <img
                  src={media.fields.file.url}
                  idx={index}
                  ref={videoRef}
                  alt="test"
                />
              ) : (
                <video
                  src={media.fields.file.url}
                  idx={idx}
                  ref={videoRef}
                  muted
                />
              )}
            </MediaPreview>
          </div>
        ))}
      </Row>
    </MediaGrid>
  )

  return (
    <Grid key={project.fields.title}>
      <CaptionWrapper>
        <h1>{project.fields.title}</h1>
        <Chips>
          {project.fields.tags?.map(tag => (
            <ToolChip active="true" key={tag}>
              {tag}
            </ToolChip>
          ))}
        </Chips>
        {isMobile && mediaGrid}
        {project.fields.description &&
          documentToReactComponents(
            project.fields.description,
            richTextRenderOptions
          )}
        <ButtonLink
          to={project.fields.actionButtonUrl}
          style={{ margin: "8px 0px" }}
        >
          {project.fields.actionButtonText}
        </ButtonLink>
        {isClient && (
          <Roles>
            Contributions
            {project.fields.project.fields.role?.map(role => (
              <p key={role}>{role}</p>
            ))}
          </Roles>
        )}
        {!isClient && (
          <Roles>
            Skills
            {project.fields.skills?.map(skill => (
              <p key={skill}>{skill}</p>
            ))}
          </Roles>
        )}
      </CaptionWrapper>
      {!isMobile && mediaGrid}
    </Grid>
  )
}
