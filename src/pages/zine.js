import { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Section from "../components/section"
import SectionTitle from "../components/sectionTitle"
import Back from "../components/blog/back"
import ZineFlipBook from "../components/zines/zineFlipBook"
import { useParams, Redirect } from "react-router-dom"
import { getZineBySlug } from "../scripts/zineList"
import Spinner from "../components/spinner"

const BackZine = styled(Back)`
  width: fit-content;
  margin: 0px 20px;
`

const Description = styled.p`
  margin: 10px;
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
      <Section id="zine" index={0}>
        {zine === null ? (
          <Spinner />
        ) : (
          <>
            <BackZine link="/art" />
            {SectionTitle(zine.title)}
            <Description>
              {zine.description} | {zine.date}
            </Description>
            <ZineFlipBook zine={zine} />
          </>
        )}
      </Section>
    </Layout>
  )
}
