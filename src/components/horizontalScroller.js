import React, { useCallback, useEffect, useMemo, useRef } from "react"

import { isScrolledIntoViewHorizontal } from "../scripts/util"
import styled from "styled-components"

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`

export default function HorizontalScroller(props) {
  const { children, className, offset } = props
  const parentRef = useRef()
  const memoChildren = useMemo(() => children, [children])

  const checkScrollVisibility = useCallback(() => {
    if (parentRef.current == null) return
    const children = parentRef.current.children
    let numVisible = 0
    for (let child of children) {
      if (
        isScrolledIntoViewHorizontal(parentRef.current, child, true, offset) &&
        !child.className.includes("animate")
      ) {
        numVisible++
        child.style.visibility = "visible"
        child.style.animationDelay = numVisible * 200 + "ms"
        child.style.webkitAnimationDelay = numVisible * 200 + "ms"
        child.style.animationDuration = "750ms"
        child.style.webkitAnimationDuration = "750ms"
        child.className = "animate__animated animate__fadeIn"
      }
    }
  }, [offset])

  // animate visible children on mount
  useEffect(() => {
    checkScrollVisibility()
  }, [checkScrollVisibility])

  // reanimate when children change
  useEffect(() => {
    const children = parentRef.current?.children
    for (let child of children) {
      child.className = ""
    }
    checkScrollVisibility()
  }, [checkScrollVisibility, memoChildren])

  return (
    <Scroller
      onScroll={_ => checkScrollVisibility()}
      ref={parentRef}
      className={className}
    >
      {memoChildren.map((child, idx) => (
        <div style={{ visibility: "hidden" }} key={idx}>
          {child}
        </div>
      ))}
    </Scroller>
  )
}
