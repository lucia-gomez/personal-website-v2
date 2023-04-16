import React, { useCallback, useEffect, useRef } from "react"
import styled from "styled-components"
import { isScrolledIntoViewHorizontal } from "../scripts/util"

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`

export default function HorizontalScroller(props) {
  const { children, className, offset } = props
  const parentRef = useRef()

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

  // animate in visible children on mount
  useEffect(() => {
    checkScrollVisibility()
  }, [checkScrollVisibility])

  return (
    <Scroller
      onScroll={_ => checkScrollVisibility()}
      ref={parentRef}
      className={className}
    >
      {children.map((child, idx) => (
        <div style={{ visibility: "hidden" }} key={idx}>
          {child}
        </div>
      ))}
    </Scroller>
  )
}
