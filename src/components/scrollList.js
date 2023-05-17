import { animated, useTransition } from "@react-spring/web"
import styled, { css } from "styled-components"
import { useMemo, useRef, useState } from "react"

import { useInView } from "react-intersection-observer"

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  ${props =>
    props.horizontal ? "flex-direction: row;" : "flex-direction: column;"}
  ${props => (props.horizontal ? "overflow-x: scroll;" : "overflow: auto;")}
  height: 100%;
`

const ScrollChild = styled.div`
  &.hidden {
    visibility: hidden;
  }
`

function ScrollItem({ children, setFirstVisible, setLastVisible }) {
  const hasBeenInView = useRef()
  const { ref, inView } = useInView({
    onChange: (inView, _) => {
      if (inView) {
        hasBeenInView.current = true
      }
      setFirstVisible(inView)
      setLastVisible(inView)
    },
  })

  const getClassNames = () => {
    if (!hasBeenInView.current) {
      return inView ? "animate__animated animate__fadeIn" : "hidden"
    }
    return "animate__animated animate__fadeIn"
  }

  return (
    <ScrollChild ref={ref} className={getClassNames()}>
      {children}
    </ScrollChild>
  )
}

export default function ScrollList(props) {
  const { children, className, containerStyle, horizontal = false } = props
  const memoChildren = useMemo(() => children, [children])
  const scrollRef = useRef()

  const [showLeftScrollIndicator, setShowLeftScrollIndicator] = useState(false)
  const [showRightScrollIndicator, setShowRightScrollIndicator] =
    useState(false)

  const trans = useTransition(memoChildren, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: "500ms",
    },
  })

  const setFirstVisible = val => setShowLeftScrollIndicator(!val)
  const setLastVisible = val => setShowRightScrollIndicator(!val)

  return (
    <div
      style={{ position: "relative", overflow: "hidden", ...containerStyle }}
    >
      <Scroller {...{ className, horizontal }} ref={scrollRef}>
        {trans((style, item, _, index) => (
          <animated.div style={style}>
            <ScrollItem
              setFirstVisible={index === 0 ? setFirstVisible : () => {}}
              setLastVisible={
                index === memoChildren.length - 1 ? setLastVisible : () => {}
              }
            >
              {item}
            </ScrollItem>
          </animated.div>
        ))}
      </Scroller>
      {horizontal && showLeftScrollIndicator && <ScrollIndicatorLeft />}
      {horizontal && showRightScrollIndicator && <ScrollIndicatorRight />}
    </div>
  )
}

const scrollIndicator = css`
  position: absolute;
  top: 50%;
  height: 70%;
  width: 75px;
  border-radius: 100px;
`

const ScrollIndicatorLeft = styled.div.attrs(_ => ({
  className: "scroll-indicator scroll-indicator-left",
}))`
  ${scrollIndicator}
  transform: translate(-100%, -50%);
  left: 0;
  box-shadow: 20px 20px 40px 0px #000000ba;
`
const ScrollIndicatorRight = styled.div.attrs(_ => ({
  className: "scroll-indicator scroll-indicator-right",
}))`
  ${scrollIndicator}
  transform: translate(100%, -50%);
  right: 0;
  box-shadow: -20px 20px 40px 0px #000000ba;
`
