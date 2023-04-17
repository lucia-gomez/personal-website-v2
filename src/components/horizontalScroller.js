import React, { useCallback, useEffect, useMemo, useRef } from "react"

import { isScrolledIntoViewHorizontal } from "../scripts/util"
import styled from "styled-components"

const _ = require("lodash")

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`

const ANIMATION_CLASSNAMES = ["animate__animated", "animate__fadeIn"]

export default function HorizontalScroller(props) {
  const { children, className, offset } = props
  const parentRef = useRef()
  const memoChildren = useMemo(() => children, [children])

  const checkScrollVisibility = useCallback(() => {
    if (parentRef.current == null) return
    const children = parentRef.current.children
    let numVisible = 0
    let lastIndexAnimated = 0
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      if (
        isScrolledIntoViewHorizontal(parentRef.current, child, true, offset) &&
        !child.className.includes("animate")
      ) {
        lastIndexAnimated = i
        numVisible++
        const delay = numVisible * 200 * Math.pow(0.9, numVisible) + "ms"
        child.style.visibility = "visible"
        child.style.animationDelay = delay
        child.style.webkitAnimationDelay = delay
        child.style.animationDuration = "500ms"
        child.style.webkitAnimationDuration = "500ms"
        ANIMATION_CLASSNAMES.forEach(animName => child.classList.add(animName))
      }
    }

    // if we scrolled past too fast due to throttling, animate anyway
    for (let i = 0; i < lastIndexAnimated; i++) {
      let child = children[i]
      if (child.style.visibility !== "visible") {
        child.style.visibility = "visible"
        child.style.animationDuration = "100ms"
        child.style.webkitAnimationDuration = "100ms"
        ANIMATION_CLASSNAMES.forEach(animName => child.classList.add(animName))
      }
    }
  }, [offset])
  const debouncedScroll = useRef(_.throttle(checkScrollVisibility, 100)).current

  // animate visible children on mount
  useEffect(() => {
    checkScrollVisibility()
  }, [checkScrollVisibility])

  // reanimate when children change
  useEffect(() => {
    const children = parentRef.current?.children
    for (let child of children) {
      ANIMATION_CLASSNAMES.forEach(animName => child.classList.remove(animName))
    }
    checkScrollVisibility()
  }, [checkScrollVisibility, memoChildren])

  return (
    <Scroller
      onScroll={_ => debouncedScroll()}
      ref={parentRef}
      className={className}
    >
      {memoChildren.map((child, idx) => (
        <div style={{ visibility: "hidden" }} className="scroll-item" key={idx}>
          {child}
        </div>
      ))}
    </Scroller>
  )
}
