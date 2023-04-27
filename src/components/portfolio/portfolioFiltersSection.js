import React, { useState } from "react"
import { animated, useSpring } from "@react-spring/web"

import PortfolioFilters from "./portfolioFilters"
import styled from "styled-components"
import useMeasure from "react-use-measure"

const Advanced = styled.div`
  color: ${props => props.theme.accent};
  cursor: pointer;
  width: fit-content;
  margin-top: 10px;
  display: flex;
  align-items: center;

  :hover {
    color: ${props => props.theme.accentHover};
  }

  i {
    margin-left: 4px;
    transform: rotateZ(${props => (props.isExpanded ? "0" : "-90deg")});
    transition: transform 100ms;
  }
`

export default function PortfolioFiltersSection(props) {
  const { activeFilter, setActiveFilter, searchProjects } = props
  const [isExpanded, setExpanded] = useState(false)

  const [ref, bounds] = useMeasure()
  const collapseAnimatedStyle = useSpring({
    height: isExpanded ? bounds.height : 0,
  })

  return (
    <div style={{ paddingBottom: 30 }}>
      <Advanced onClick={() => setExpanded(!isExpanded)} {...{ isExpanded }}>
        {isExpanded ? "Hide Filters" : "Show Filters"}
        <i className={"fas fa-chevron-down"}></i>
      </Advanced>
      <animated.div style={{ ...collapseAnimatedStyle, overflow: "hidden" }}>
        <div ref={ref}>
          <PortfolioFilters
            active={activeFilter}
            setActive={setActiveFilter}
            searchProjects={searchProjects}
          />
        </div>
      </animated.div>
    </div>
  )
}
