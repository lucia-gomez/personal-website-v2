import { animated, useTransition } from "@react-spring/web"
import styled from "styled-components"
import React, { useRef } from "react"

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
  // const memoChildren = useMemo(() => children, [children])
  const scrollRef = useRef()

  const childArray = React.Children.toArray(children)
  const items = childArray.map((element, i) => ({
    key: element.key ?? i,
    element,
  }))
  // const [showLeftScrollIndicator, setShowLeftScrollIndicator] = useState(false)
  // const [showRightScrollIndicator, setShowRightScrollIndicator] =
  //   useState(false)
  const trans = useTransition(items, {
    keys: item => item.key,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: "500ms",
    },
  })

  // const setFirstVisible = val => setShowLeftScrollIndicator(!val)
  // const setLastVisible = val => setShowRightScrollIndicator(!val)

  return (
    <div style={{ position: "relative", ...containerStyle }}>
      <Scroller {...{ className, horizontal }} ref={scrollRef}>
        {trans((style, item, _, index) => (
          <animated.div style={style}>
            <ScrollItem setFirstVisible={() => {}} setLastVisible={() => {}}>
              {item.element}
            </ScrollItem>
          </animated.div>
        ))}
      </Scroller>
    </div>
  )
}
