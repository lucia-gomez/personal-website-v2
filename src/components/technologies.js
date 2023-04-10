import React from "react"
import styled from "styled-components"
import TabbedContent from "./tabbedContent"

import { ul, li } from "../style/blogStyle"

const BulletPoints = styled.ul`
  ${ul}
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
  const backend = Item(["Express", "Flask", "MySQL", "PostgreSQL", "Postman"])
  const langs = Item(["Javascript", "Java", "Python", "OCaml", "Dart", "PHP"])
  const graphics = Item(["threeJS", "p5.js", "D3", "WebGL"])
  const creative = Item(["Spark AR", "Blender", "Photoshop", "Figma"])
  const hosting = Item(["Heroku", "Netlify", "GitHub", "AWS", "Squarespace"])

  const tabs = {
    Frontend: frontend,
    "UI Frameworks": frameworks,
    Backend: backend,
    Languages: langs,
    Graphics: graphics,
    Creative: creative,
    Hosting: hosting,
  }

  return <TabbedContent {...{ tabs }} horizontal fixedHeight={90} />
}
