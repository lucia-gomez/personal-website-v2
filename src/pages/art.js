import { Link as LinkRouter, useNavigate, useParams } from "react-router-dom"
import React, { useEffect, useMemo, useState } from "react"
import artList, {
  getArtBySlug,
  getNextArtSlug,
  getPreviousArtSlug,
} from "../scripts/artList"

import ArtItem from "../components/art/artItem"
import ArtModal from "../components/art/artModal"
import Link from "../components/link"
import ScrollList from "../components/scrollList"
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

const ZineList = styled(ScrollList)`
  ~ .scroll-indicator {
    top: 40%;
    @media screen and (max-width: 576px) {
      height: 55%;
      top: 30%;
    }
  }
`

export default function ArtPage() {
  const [modalItem, setModalItem] = useState(null)
  const [nextModalSlug, setNextModalSlug] = useState(null)
  const [prevModalSlug, setPrevModalSlug] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const foundArt = getArtBySlug(slug)
    if (foundArt != null) {
      setModalItem(foundArt)
      setNextModalSlug(getNextArtSlug(foundArt.slug))
      setPrevModalSlug(getPreviousArtSlug(foundArt.slug))
    }
  }, [slug])

  const handleModalClose = () => {
    setModalItem(null)
    navigate("/art/home")
  }

  const memoZines = useMemo(
    () => (
      <Subsection title="Zines">
        <p>
          Sometimes I make silly little{" "}
          <Link href="https://en.wikipedia.org/wiki/Zine">zines</Link>. Click on
          a zine to read it!
        </p>
        <ZineList horizontal={true}>
          {zines.map((zine, idx) => (
            <ZineItem zine={zine} key={idx} />
          ))}
        </ZineList>
      </Subsection>
    ),
    []
  )

  const memoSections = useMemo(
    () =>
      artList.map((section, index) => (
        <Subsection title={section.sectionName} key={index}>
          <p>{section.description}</p>
          <ScrollList horizontal={true}>
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
          </ScrollList>
        </Subsection>
      )),
    []
  )

  return (
    <>
      <div style={{ padding: "75px 20px 50px 20px" }}>
        {memoZines}
        {memoSections}
      </div>
      <ArtModal
        modalItem={modalItem}
        isShowing={modalItem != null}
        handleClose={handleModalClose}
        nextSlug={nextModalSlug != null ? `/art/${nextModalSlug}` : null}
        prevSlug={prevModalSlug != null ? `/art/${prevModalSlug}` : null}
      />
    </>
  )
}
