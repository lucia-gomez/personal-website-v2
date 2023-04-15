import { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import Back from "../components/blog/back"
import ZineFlipBook from "../components/zines/zineFlipBook"
import { useParams, Redirect } from "react-router-dom"
import { getZineBySlug } from "../scripts/zineList"
import BlogLoading from "../components/blog/blogLoading"

const Wrapper = styled.div`
  padding: 75px 20px 50px 20px;
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

  return (
    <Layout>
      {zine == null ? (
        <BlogLoading />
      ) : (
        <Wrapper>
          <BackZine link="/art" />
          <ZineTitle>{zine.title}</ZineTitle>
          <Description>
            {zine.description} | {zine.date}
          </Description>
          <ZineFlipBook zine={zine} />
        </Wrapper>
      )}
    </Layout>
  )
}
