import React, { useState } from "react"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: ${props => (props.isEven ? "row" : "row-reverse")};
  justify-content: space-between;
  margin-bottom: 40px;
`

const Image = styled.div`
  height: 50vh;
  width: 50vw;
  background-image: url(${props => props.image});
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  /* transform: skewY(${props => (props.isEven ? "4deg" : "-4deg")}); */
`

export default function PortfolioItem({ project, index }) {
  const [isEven] = useState(index % 2 === 0)
  return (
    <Row isEven={isEven}>
      {project.title}
      <Image image={project.image} isEven={isEven} />
    </Row>
  )
}
