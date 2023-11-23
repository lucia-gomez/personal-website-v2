import { li, ul } from "../../style/blogStyle"

import React from "react"
import TabbedContent from "../tabbedContent"
import styled from "styled-components"

const BulletPoints = styled.ul`
  ${ul}
  @media screen and (max-width: 576px) {
    display: grid;
    grid-template-columns: auto auto;
    height: unset;
    column-gap: 40px;
    justify-content: start;
  }

  height: 90px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  column-gap: 40px;
`
const Bullet = styled.li`
  ${li}
  width: fit-content;
  margin: 0;
`

const Item = (bullets, description = null) => (
  <>
    {description && <p>{description}</p>}
    <BulletPoints>
      {bullets.map((bullet, idx) => (
        <Bullet key={idx}>{bullet}</Bullet>
      ))}
    </BulletPoints>
  </>
)

export default function TechnologiesSection() {
  const frontend = Item([
    "HTML/CSS",
    "Styled Components",
    "Bootstrap",
    "Sass",
    "Materialize",
  ])
  const frameworks = Item(["React", "React Native", "Flutter"])
  const backend = Item([
    "Express",
    "Flask",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Postman",
  ])
  const langs = Item([
    "Javascript",
    "Java",
    "Python",
    "OCaml",
    "Dart",
    "PHP",
    "Arduino",
  ])
  const graphics = Item(["threeJS", "p5.js", "D3", "WebGL"])
  const creative = Item([
    "Spark AR",
    "Blender",
    "Womp 3D",
    "Max/MSP/Jitter",
    "Photoshop",
    "After Effects",
    "Figma",
  ])
  const hosting = Item(["Heroku", "Netlify", "GitHub", "AWS", "Squarespace"])

  const tabs = {
    Creative: creative,
    Graphics: graphics,
    Frontend: frontend,
    "UI Frameworks": frameworks,
    Backend: backend,
    Languages: langs,
    Hosting: hosting,
  }

  return <TabbedContent {...{ tabs }} horizontal />
}
