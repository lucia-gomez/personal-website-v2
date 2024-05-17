import { Navigate, useParams } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react"
import {
  getNextZineSlug,
  getPreviousZineSlug,
  getZineBySlug,
} from "../scripts/zineList"

import Back from "../components/blog/back"
import BlogLoading from "../components/blog/blogLoading"
import BlogNavButtons from "../components/blog/blogNavButtons"
import SectionTitle from "../components/sectionTitle"
import ZineFlipBook from "../components/zines/zineFlipBook"
import { resetAnimation } from "../scripts/util"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 75px 20px 50px 20px;
  display: grid;
  grid-template-rows: auto 1fr;

  @media screen and (min-width: 576px) {
    max-height: var(--doc-height, 100vh);
  }
`

const ZineTitle = styled(SectionTitle)`
  margin: 0;

  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`

const BackZine = styled(Back)`
  margin: 0px;
`

const Description = styled.p`
  margin: 0;
  margin-bottom: 12px;
  display: flex;
`

const ZineNavButtons = styled(BlogNavButtons)`
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 100%;
  padding: 12px;

  @media screen and (max-width: 576px) {
    position: relative;
  }
`

export default function ZinePage() {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [zine, setZine] = useState(null)
  const [nextSlug, setNextSlug] = useState(null)
  const [prevSlug, setPrevSlug] = useState(null)
  const ref = useRef()

  useEffect(() => {
    setLoading(true)
    setZine(null)

    if (ref.current != null) resetAnimation(ref.current)

    if (slug !== null) {
      const zineData = getZineBySlug(slug)
      setZine(zineData)
      setNextSlug(getNextZineSlug(zineData.slug))
      setPrevSlug(getPreviousZineSlug(zineData.slug))
    }
    setLoading(false)
  }, [slug])

  if (zine === null && !loading) {
    return <Navigate to="/404" />
  }

  return zine == null ? (
    <BlogLoading />
  ) : (
    <>
      <Wrapper ref={ref} className="animate__animated animate__fadeIn">
        <div>
          <BackZine link="/art" />
          <ZineTitle>{zine.title}</ZineTitle>
          <Description>
            {zine.description} | {zine.date}
          </Description>
        </div>
        <ZineFlipBook zine={zine} />
      </Wrapper>
      <ZineNavButtons
        nextSlug={nextSlug != null ? `/art/zine/${nextSlug}` : null}
        prevSlug={prevSlug != null ? `/art/zine/${prevSlug}` : null}
      />
    </>
  )
}
