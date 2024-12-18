import { Canvas, useLoader } from "@react-three/fiber"
import { Navigate, useParams } from "react-router-dom"
import { OrbitControls, Stage } from "@react-three/drei"
import { useEffect, useState } from "react"

import Back from "../../components/blog/back"
import BlogLoading from "../../components/blog/blogLoading"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import React from "react"
import SectionTitle from "../../components/sectionTitle"
import { Suspense } from "react"
import { getArtBySlug } from "../../scripts/artList"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"
import { useGLTF } from "@react-three/drei"

function ThreeJsMesh({ meshSrc }) {
  const gltf = useLoader(GLTFLoader, meshSrc)
  return <primitive object={gltf.scene} />
}

const Wrapper = styled.div`
  padding: 65px 20px 0px;
  h2 {
    margin-bottom: 0;
  }
`

const CanvasColored = styled(Canvas)`
  height: 50vh !important;
  max-width: 1500px;
  border-radius: 10px;
  background: ${props => hexToRGB(props.theme.medium, 0.2)};

  @media screen and (max-width: 876px) {
    width: 100% !important;
  }
`

const Date = styled.p`
  color: ${props => hexToRGB(props.theme.text, 0.4)};
  margin-bottom: 20px;
`

const Media = styled.div`
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img,
  video {
    border-radius: 10px;
    width: 100%;
    max-width: 1500px;
    margin: 10px 0px;

    @media screen and (min-width: 876px) {
      width: 80%;
    }
  }

  p {
    margin-top: 10px;
    margin-bottom: 0px;
    align-self: flex-start;
  }
`

export default function ThreeDObjectPage() {
  const { slug } = useParams()
  const [art, setArt] = useState(undefined)
  useEffect(() => {
    setArt(getArtBySlug("3d/" + slug))
  }, [slug])

  if (art === null) {
    return <Navigate to="/404" />
  }

  if (art === undefined) {
    return <BlogLoading />
  }

  useGLTF.preload(art.pageContent.meshSrc)

  return (
    <Wrapper>
      <Back link="/art" style={{ margin: "0px" }} />
      <SectionTitle>{art.title}</SectionTitle>
      <Date>{art.date}</Date>
      {art.pageContent.description}
      <CanvasColored
        camera={{ position: art.pageContent.cameraPosition, fov: 40 }}
      >
        {art.pageContent.lights}
        <Suspense fallback={null}>
          <Stage environment="sunset" intensity={0.8} adjustCamera={false}>
            {typeof art.pageContent.meshSrc === "string" ? (
              <ThreeJsMesh meshSrc={art.pageContent.meshSrc} />
            ) : (
              art.pageContent.meshSrc
            )}
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </CanvasColored>
      <Media>
        {art.pageContent.media?.map(media => {
          if (media.type === "img") {
            return <img src={media.src} alt={media.alt} key={media.src} />
          } else if (media.type === "video") {
            return (
              <video
                src={media.src}
                key={media.src}
                autoPlay
                loop
                muted
                playsInline
              />
            )
          } else if (media.type === "text") {
            return <p key={media.value}>{media.value}</p>
          }
          return null
        })}
      </Media>
    </Wrapper>
  )
}
