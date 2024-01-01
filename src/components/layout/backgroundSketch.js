import InteractiveDrawing from "../interactiveDrawing"
import styled from "styled-components"

const DrawingWrapper = styled.div`
  z-index: -1;
  canvas {
    mask: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.1) 15%,
        white 25%,
        white 50%,
        white 80%,
        rgba(0, 0, 0, 0.1) 90%
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, white 30%);
    -webkit-mask-composite: source-in; /* For Chrome */
    mask-composite: intersect; /* For Firefox */
    mask-position: center;
    mask-size: 70% 70%;
  }
`

export default function BackgroundSketch({ className }) {
  return (
    <DrawingWrapper className={className}>
      <InteractiveDrawing />
    </DrawingWrapper>
  )
}
