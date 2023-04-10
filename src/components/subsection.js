import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import useMeasure from "react-use-measure"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 5px 30px;
  p {
    text-align: left;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

const Title = styled.h3`
  color: ${props => props.theme.header};
  width: fit-content;
  margin: 0;
`

const Toggle = styled.i.attrs(props => ({
  className: "fas fa-chevron-down",
}))`
  font-style: normal;
  font-size: 22px;
  cursor: pointer;
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
  const { openByDefault = true } = props
  const [isOpen, setOpen] = useState(openByDefault)
  const [ref, bounds] = useMeasure()
  const contentAnimatedStyle = useSpring({
    height: isOpen ? bounds.height : 0,
  })

  return (
    <Wrapper className={props.className}>
      <Row>
        <Title>{props.title}</Title>
        <Toggle isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
      </Row>
      <Collapsible style={contentAnimatedStyle}>
        <div ref={ref}>{props.children}</div>
      </Collapsible>
    </Wrapper>
  )
}

export default Subsection
