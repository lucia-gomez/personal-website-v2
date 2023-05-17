import { animated, useTransition } from "@react-spring/web"
import { useCallback, useMemo, useRef } from "react"

import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${props =>
    props.horizontal ? "flex-direction: row;" : "flex-direction: column;"}
  ${props => (props.horizontal ? "overflow-x: scroll;" : "overflow-y: scroll;")}
`

const ScrollChild = styled.div`
  &.hidden {
    visibility: hidden;
  }
`

function ScrollItem({ children }) {
  const ref = useRef()
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef]
  )

  return (
    <ScrollChild
      ref={setRefs}
      className={inView ? "animate__animated animate__fadeIn" : "hidden"}
    >
      {children}
    </ScrollChild>
  )
}

export default function ScrollList(props) {
  const { children, className, horizontal = false } = props
  const memoChildren = useMemo(() => children, [children])

  const trans = useTransition(memoChildren, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: "500ms",
    },
  })

  return (
    <Scroller className={className} horizontal={horizontal}>
      {trans((style, child) => (
        <animated.div style={style}>
          <ScrollItem>{child}</ScrollItem>
        </animated.div>
      ))}
    </Scroller>
  )
}
