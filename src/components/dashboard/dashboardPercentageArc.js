import { useEffect, useRef } from "react"

import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 12px;
  left: 0;
  /* border: 1px solid #ccc; */
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Path = styled.path`
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  stroke: ${props => props.theme.accent};
  transition: stroke-dashoffset 0.3s ease-in-out;
`

const PathBg = styled(Path)`
  stroke: ${props => hexToRGB(props.theme.medium, 0.2)};
`

const svgArc = "M20,62 a40,40 0 1,1 60,0"

export default function DashboardPercentageArc({ percentage }) {
  const ref = useRef()

  useEffect(() => {
    const pathLength = ref.current.getTotalLength()
    const offset = pathLength * (1 - percentage)

    ref.current.style.strokeDasharray = pathLength
    ref.current.style.strokeDashoffset = pathLength

    setTimeout(() => {
      ref.current.style.strokeDashoffset = offset
    }, 100)
  }, [percentage])

  return (
    <Container>
      <Svg viewBox="0 0 100 60">
        <PathBg d={svgArc}></PathBg>
        <Path ref={ref} d={svgArc}></Path>
      </Svg>
    </Container>
  )
}
