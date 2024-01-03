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

  ol,
  ul {
    padding-left: 12px;
    max-width: 70%;

    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
  }
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
  aspect-ratio: 16/10;
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

const Image = styled.img`
  width: 80%;
  max-height: unset;
  border-radius: 5px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export default function RisoWoodles() {
  const [photos, setPhotos] = useState([])
  const [modalItem, setModalItem] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    ImageKitApi.getImagesFromPath("/website/art/risoWoodles")
      .then(result => {
        const data = result.data.map((photo, idx) => ({
          src: photo.url,
          id: photo.fileId,
          title: "Riso Woodle #" + (idx + 1),
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
    navigate("/art/series/riso-woodles")
  }

  const handleModalOpen = idx => {
    setModalItem(photos[idx])
  }

  return (
    <Wrapper>
      <SectionTitle>Riso Woodles</SectionTitle>
      <p>
        What's a Riso Noodle? A little 3D noodle-y curve modeled with{" "}
        <Link to="https://alpha.womp.com/">Womp</Link> and color-separated for{" "}
        <Link to="https://risottostudio.com/pages/what-is-risograph-printing">
          risograph printing.
        </Link>{" "}
        Click on a photo to enlarge.
      </p>
      {photos.length === 0 && <Spinner />}
      <PhotoGrid>
        {photos.map((photo, idx) => (
          <LinkWrapper
            to={`/art/series/riso-woodles/${idx + 1}`}
            key={photo.id}
          >
            <Photo src={photo.src} onClick={() => handleModalOpen(idx)} />
          </LinkWrapper>
        ))}
      </PhotoGrid>
      <BlogStyle>
        <h4>Process</h4>
        {/* <p>
          Collagescape is an interactive experience for generating digital
          collages from art on my bedroom walls. I created this tool in October
          2023 as part of my Interactive Installations course at NYU. It's made
          with Max/MSP/Jitter, a family of visual programming tools for creating
          interactive audio/visual projects.
        </p> */}
        <ul>
          <li>
            Model an interesting curve in Womp and give it a colorful material
            <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodles/process/womp.png?updatedAt=1704264004955" />
          </li>
          <li>Export a rendered image of this model</li>
          <li>
            Load image into{" "}
            <Link to="https://spectrolite.app/">Spectrolite</Link>, an app for
            preparing color separations for risograph printing
          </li>
          <li>
            Choose an ink color palette in Spectrolite and generate a color
            separation for those ink colors. Risographs print one ink
            color/layer at a time, so the image must be separated into those
            colors if it was to be printed
            <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodles/process/spectrolite.png?updatedAt=1704263874320" />
          </li>
          <li>
            Look at the output. Either end with the preview composite image or
            go a step further with the ink files...
            <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodles/process/separation.png?updatedAt=1704263873795" />
          </li>
          <li>
            For more control over the final image, load the ink separation files
            into Photoshop as layers. In these black-and-white images, white
            means no ink should be applied, while shades of gray and black
            represent how saturated the ink should be at that point
          </li>
          <li>
            Add a color overlay to each grayscale layer to color it with its
            corresponding risograph ink. Then set each layer's blend mode to{" "}
            <code>multiply</code>. This is a hacky way to simulate risograph
            output with a digital colorspace. You can find mappings for{" "}
            <Link to="https://www.stencil.wiki/colors">
              riso inks to RGB hex codes here
            </Link>
            <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodles/process/photoshop.png?updatedAt=1704265050657" />
          </li>
          <li>
            Experiment with different ink colors, different layer blend modes,
            and even different layer orders. Just like with physical risograph
            printing, the order of the ink layers affects the output{" "}
          </li>
          <li>
            Enjoy your Riso Woodle!{" "}
            <Image src="https://ik.imagekit.io/5xtlzx2c3y/website/art/risoWoodles/process/final.png?updatedAt=1704266191950" />
          </li>
        </ul>
      </BlogStyle>

      {photos.length > 0 && (
        <ArtModal
          modalItem={modalItem}
          isShowing={modalItem != null}
          handleClose={handleModalClose}
          nextSlug={
            id < photos.length
              ? `/art/series/riso-woodles/${Number(id) + 1}`
              : null
          }
          prevSlug={
            id > 1 ? `/art/series/riso-woodles/${Number(id) - 1}` : null
          }
        />
      )}
    </Wrapper>
  )
}
