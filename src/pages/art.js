import styled from "styled-components"
import { useCallback, useEffect, useRef, useState } from "react"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/layout/subsection"
import Link from "../components/link"
import { Link as LinkRouter, useHistory, useParams } from "react-router-dom"
import ArtItem from "../components/art/artItem"
import ZineItem from "../components/zines/zineItem"
import zines from "../scripts/zineList"
import artList, { getArtBySlug } from "../scripts/artList"
import ArtModal from "../components/art/artModal"
import { isScrolledIntoViewHorizontal } from "../scripts/util"

const ZinePortfolioCardDeck = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: scroll;
  justify-content: flex-start;
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
  const zineDeckRef = useRef()

  useEffect(() => {
    const foundArt = getArtBySlug(slug)
    if (foundArt != null) {
      setModalItem(foundArt)
    }
  }, [slug])

  const checkScrollVisibility = () => {
    if (zineDeckRef.current == null) return
    const zineElts = zineDeckRef.current.children
    let numVisible = 0
    for (let zineElt of zineElts) {
      if (
        isScrolledIntoViewHorizontal(zineDeckRef.current, zineElt, true) &&
        !zineElt.className.includes("animate")
      ) {
        zineElt.style.visibility = "visible"
        zineElt.style.animationDelay = ++numVisible * 200 + "ms"
        zineElt.style.animationDuration = "750ms"
        zineElt.className = "animate__animated animate__fadeIn"
      }
    }
  }

  useEffect(() => {
    checkScrollVisibility()
  }, [])

  const handleScroll = useCallback(e => {
    checkScrollVisibility()
  }, [])

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
          <ZinePortfolioCardDeck
            id="zine-deck"
            ref={zineDeckRef}
            onScroll={e => handleScroll(e)}
          >
            {zines.map((zine, idx) => (
              <div style={{ visibility: "hidden" }} key={idx}>
                <ZineItem zine={zine} />
              </div>
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
