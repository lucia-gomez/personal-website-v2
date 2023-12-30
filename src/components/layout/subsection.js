import React, { useCallback, useRef, useState } from "react"
import { animated, useSpring } from "@react-spring/web"

import { hexToRGB } from "../../style/theme"
import styled from "styled-components"
import useMeasure from "react-use-measure"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 5px 20px;
  padding: 16px;
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  border-radius: 5px;

  p {
    text-align: left;
  }

  @media screen and (max-width: 576px) {
    margin: 20px 0px 5px 0px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  cursor: ${props => (props.collapsible ? "pointer" : "unset")};
  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`

const Title = styled.h3`
  color: ${props => props.theme.text};
  width: fit-content;
  margin: 0;
`

export const Toggle = styled.i.attrs(_ => ({
  className: "fas fa-chevron-down",
}))`
  font-style: normal;
  font-size: 22px;
  opacity: 0.5;
  transition: opacity 200ms, transform 100ms;
  margin-left: 8px;
  padding-top: 4px;
  transform: rotateZ(${props => (props.isOpen ? "0" : "-90deg")});

  :hover {
    opacity: 1;
  }
`

const Collapsible = styled(animated.div)`
  overflow: hidden;
`

const Subsection = props => {
  const { openByDefault = true, collapsible = true } = props

  const [isOpen, setOpen] = useState(collapsible ? openByDefault : true)
  const [shouldScroll, setShouldScroll] = useState(false) // prevent autoscroll on mount
  const [ref, bounds] = useMeasure()
  const sectionRef = useRef()

  const scroll = useCallback(() => {
    if (isOpen && shouldScroll) {
      const offsetTop = sectionRef.current.offsetTop - 75
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
    setShouldScroll(false)
  }, [isOpen, shouldScroll])

  const contentAnimatedStyle = useSpring({
    height: isOpen ? bounds.height : 0,
    config: { duration: 250 },
    onRest: scroll,
  })

  return (
    <Wrapper
      className={props.className}
      ref={sectionRef}
      onClick={() => setShouldScroll(true)}
    >
      <Row
        onClick={collapsible ? () => setOpen(prev => !prev) : () => {}}
        collapsible={collapsible}
      >
        <Title>{props.title}</Title>
        {collapsible && <Toggle isOpen={isOpen} />}
      </Row>
      <Collapsible style={contentAnimatedStyle}>
        <div ref={ref}>{props.children}</div>
      </Collapsible>
    </Wrapper>
  )
}

export default Subsection
