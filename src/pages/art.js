import { Link as LinkRouter, useHistory, useParams } from "react-router-dom"
import artList, { getArtBySlug } from "../scripts/artList"
import { useEffect, useMemo, useState } from "react"

import ArtItem from "../components/art/artItem"
import ArtModal from "../components/art/artModal"
import HorizontalScroller from "../components/horizontalScroller"
import Link from "../components/link"
import SectionTitle from "../components/sectionTitle"
import Subsection from "../components/layout/subsection"
import ZineItem from "../components/zines/zineItem"
import styled from "styled-components"
import zines from "../scripts/zineList"

const LinkWrapper = styled(LinkRouter)`
  :hover {
    color: unset;
    text-decoration: unset;
  }
`

const ArtList = styled(HorizontalScroller)`
  padding-left: 10px;
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

  const memoZines = useMemo(
    () => (
      <Subsection title="Zines">
        <p>
          Sometimes I make silly little{" "}
          <Link href="https://en.wikipedia.org/wiki/Zine">zines</Link>. Click on
          a zine to read it!
        </p>
        <ArtList offset={50}>
          {zines.map((zine, idx) => (
            <ZineItem zine={zine} key={idx} />
          ))}
        </ArtList>
      </Subsection>
    ),
    []
  )

  const memoSections = useMemo(
    () =>
      artList.map((section, index) => (
        <Subsection title={section.sectionName} key={index}>
          <p>{section.description}</p>
          <ArtList offset={50}>
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
      )),
    []
  )

  return (
    <>
      <div style={{ padding: "75px 20px 50px 20px" }}>
        <SectionTitle>Art</SectionTitle>
        {memoZines}
        {memoSections}
      </div>
      <ArtModal
        modalItem={modalItem}
        isShowing={modalItem != null}
        handleClose={handleModalClose}
      />
    </>
  )
}
