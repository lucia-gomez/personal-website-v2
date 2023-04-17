import { Redirect, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import Back from "../components/blog/back"
import BlogLoading from "../components/blog/blogLoading"
import SectionTitle from "../components/sectionTitle"
import ZineFlipBook from "../components/zines/zineFlipBook"
import { getZineBySlug } from "../scripts/zineList"
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

export default function ZinePage() {
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const [zine, setZine] = useState(null)

  useEffect(() => {
    setLoading(true)
    if (slug !== null) {
      const zineData = getZineBySlug(slug)
      setZine(zineData)
    }
    setLoading(false)
  }, [slug])

  if (zine === null && !loading) {
    return <Redirect to="/404" />
  }

  return zine == null ? (
    <BlogLoading />
  ) : (
    <Wrapper>
      <div>
        <BackZine link="/art" />
        <ZineTitle>{zine.title}</ZineTitle>
        <Description>
          {zine.description} | {zine.date}
        </Description>
      </div>
      <ZineFlipBook zine={zine} />
    </Wrapper>
  )
}
