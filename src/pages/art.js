import styled from "styled-components"
import { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/layout/subsection"
import Link from "../components/link"
import { Link as LinkRouter, useHistory, useParams } from "react-router-dom"
import ArtItem from "../components/art/artItem"
import ZineItem from "../components/zines/zineItem"
import { PortfolioCardDeck } from "../components/portfolio/portfolioCardDeck"
import zines from "../scripts/zineList"
import artList, { getArtBySlug } from "../scripts/artList"
import ArtModal from "../components/art/artModal"

const ZinePortfolioCardDeck = styled(PortfolioCardDeck)`
  padding: 0px;

  @media only screen and (min-width: 576px) {
    justify-content: flex-start;
  }

  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
  }
`

const LinkWrapper = styled(LinkRouter)`
  :hover {
    color: unset;
    text-decoration: unset;
  }
`

const ArtList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`

export default function ArtPage() {
  const [modalItem, setModalItem] = useState(null)
  const { slug } = useParams()
  const history = useHistory()

  useEffect(() => {
    const foundArt = getArtBySlug(slug)
    if (foundArt != null) {
      setModalItem(foundArt)
    }
  }, [slug])

  const handleModalClose = () => {
    setModalItem(null)
    history.push("/art")
  }

  return (
    <Layout>
      <div style={{ padding: "75px 20px 50px 20px" }}>
        {SectionTitle("Art")}
        <Subsection title="Zines">
          <p>
            Sometimes I make silly little{" "}
            <Link href="https://en.wikipedia.org/wiki/Zine">zines</Link>. Click
            on a zine to read it!
          </p>
          <ZinePortfolioCardDeck>
            {zines.map((zine, idx) => (
              <ZineItem zine={zine} key={idx} />
            ))}
          </ZinePortfolioCardDeck>
        </Subsection>
        {artList.map((section, index) => (
          <Subsection title={section.sectionName} key={index}>
            <p>{section.description}</p>
            <ArtList>
              {section.items.map(item => (
                <div key={item.title}>
                  <LinkWrapper to={`/art/${item.slug}`}>
                    <ArtItem
                      title={item.title}
                      date={item.date}
                      src={item.src}
                      alt={item.alt}
                    />
                  </LinkWrapper>
                </div>
              ))}
            </ArtList>
          </Subsection>
        ))}
      </div>
      <ArtModal
        modalItem={modalItem}
        isShowing={modalItem != null}
        handleClose={handleModalClose}
      />
    </Layout>
  )
}
