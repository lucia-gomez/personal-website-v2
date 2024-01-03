import { Link as LinkRouter, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import ArtModal from "../../components/art/artModal"
import BlogStyle from "../../style/blogStyle"
import { ImageKitApi } from "../../scripts/api"
import Link from "../../components/link"
import SectionTitle from "../../components/sectionTitle"
import Spinner from "../../components/spinner"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 56px 20px 50px 20px;
`

const PhotoGrid = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  margin-bottom: 32px;
`

const Photo = styled.img`
  width: 20vw;
  max-width: 180px;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
`

const LinkWrapper = styled(LinkRouter)`
  :hover {
    color: unset;
    text-decoration: unset;
  }
`

export default function Collagescape() {
  const [photos, setPhotos] = useState([])
  const [modalItem, setModalItem] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    ImageKitApi.getImagesFromPath("/website/art/collagescape")
      .then(result => {
        const data = result.data.map((photo, idx) => ({
          src: photo.url,
          id: photo.fileId,
          title: "Collagescape #" + (idx + 1),
        }))
        setPhotos(data)
      })
      .catch(error => {
        console.error(error)
        setPhotos([])
      })
  }, [])

  useEffect(() => {
    if (id != null && photos.length >= id) {
      setModalItem(photos[id - 1])
    }
  }, [photos, id])

  const handleModalClose = () => {
    setModalItem(null)
    navigate("/art/series/collagescape")
  }

  const handleModalOpen = idx => {
    setModalItem(photos[idx])
  }

  return (
    <Wrapper>
      <SectionTitle>Collagescape</SectionTitle>
      <p>
        Here's some examples of art generated with Collagescape. Click to
        enlarge, scroll to learn more about this project.
      </p>
      {photos.length === 0 && <Spinner />}
      <PhotoGrid>
        {photos.map((photo, idx) => (
          <LinkWrapper
            to={`/art/series/collagescape/${idx + 1}`}
            key={photo.id}
          >
            <Photo src={photo.src} onClick={() => handleModalOpen(idx)} />
          </LinkWrapper>
        ))}
      </PhotoGrid>
      <BlogStyle>
        <h4>Process</h4>
        <p>
          Collagescape is an interactive experience for generating digital
          collages from art on my bedroom walls. I created this tool in October
          2023 as part of my Interactive Installations course at NYU. It's made
          with Max/MSP/Jitter, a family of visual programming tools for creating
          interactive audio/visual projects.
        </p>
        <ul>
          <li>Take photo of posters on bedroom wall</li>
          <li>Using Photoshop, remove one poster from the wall per layer</li>
          <li>Export Photoshop frames into a video</li>
          <li>Load video into Max</li>
          <li>
            Max mousestate controls video playback, creating the effect that the
            mouse cursor moves over posters to make them disappear from the wall
          </li>
          <li>Max targets the background color of the wall to chroma key</li>
          <li>
            Max replaces the wall with another image, like stars or clouds
          </li>
          <li>Mess with settings to create interesting visual effects</li>
        </ul>
        <p>
          This is what the "code" looks like. If you have Max installed, you can{" "}
          <Link to="https://github.com/lucia-gomez/collagescape">
            take a closer look here.
          </Link>
        </p>
        <img
          src="https://ik.imagekit.io/5xtlzx2c3y/website/blog/nyuMidterm/maxPatch.png?updatedAt=1699548953809"
          alt="max patch"
        />
        <h4>Interactions</h4>
        <ul>
          <li>Mouse x-position: collage video playback</li>
          <li>Mouse y-position: RGB scalebias for active color channel</li>
          <li>R: activate red channel</li>
          <li>G: activate green channel</li>
          <li>B: activate blue channel</li>
          <li>C: activate chroma keyed background</li>
          <li>S: take a screenshot</li>
        </ul>
        <p>
          Along with some controls within the patch UI to control brightness,
          contrast, saturation, selecting chroma key color, and crossfading
          between the stars and sky chroma key backgrounds.
        </p>
      </BlogStyle>

      {photos.length > 0 && (
        <ArtModal
          modalItem={modalItem}
          isShowing={modalItem != null}
          handleClose={handleModalClose}
          nextSlug={
            id < photos.length
              ? `/art/series/collagescape/${Number(id) + 1}`
              : null
          }
          prevSlug={
            id > 1 ? `/art/series/collagescape/${Number(id) - 1}` : null
          }
        />
      )}
    </Wrapper>
  )
}
