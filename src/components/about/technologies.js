import React, { useState } from "react"
import { FilterChip, FilterRow } from "../filters"
import { ToolChip } from "../toolChip"

export default function TechnologiesSection() {
  const [active, setActive] = useState(null)

  const frontend = [
    "HTML/CSS",
    "Styled Components",
    "Chakra UI",
    "Bootstrap",
    "Materialize",
    "Material UI",
  ]
  const frameworks = ["React", "React Native", "Next.js", "Flutter"]
  const backend = [
    "Express",
    "Node.js",
    "GraphQL",
    "Django",
    "Firestore",
    "Supabase",
    "MongoDB",
    "MySQL",
  ]
  const langs = [
    "Javascript",
    "Java",
    "Python",
    "OCaml",
    "PHP",
    "C++/Arduino",
    "Bash",
  ]
  const graphics = ["threeJS", "p5.js", "D3", "WebGL", "Risograph Printing"]
  const creative = [
    "Arduino",
    "Particle",
    "TouchDesigner",
    "Max/MSP/Jitter",
    "MIDI",
    "Axidraw",
    "LED Animation",
    "Raspberry Pi",
    "Spark AR",
    "Blender",
    "Womp 3D",
    "Lottie",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere",
    "Adobe After Effects",
  ]
  const proto = [
    "Autodesk Fusion 360",
    "3D Printing",
    "Circuit Prototyping and Debugging",
    "Printed Circuit Boards",
    "Soldering",
    "Laser Cutting",
    "CNC Milling",
  ]
  const hosting = [
    "Heroku",
    "Netlify",
    "GitHub",
    "AWS",
    "Google Cloud Platform",
    "Google Apps Script",
    "Squarespace",
  ]

  const tabs = {
    "Creative Technology": creative,
    "Rapid Prototyping": proto,
    Graphics: graphics,
    Frontend: frontend,
    "UI Frameworks": frameworks,
    Backend: backend,
    Languages: langs,
    Hosting: hosting,
  }

  return (
    <>
      <FilterRow style={{ marginBottom: 8 }}>
        <FilterChip
          active={active == null ? "true" : "false"}
          onClick={() => setActive(null)}
          idx={"all"}
        >
          All
        </FilterChip>
        {Object.keys(tabs).map(tab => (
          <FilterChip
            active={active === tab ? "true" : "false"}
            onClick={() => setActive(tab)}
            idx={tab}
            key={tab}
          >
            {tab}
          </FilterChip>
        ))}
      </FilterRow>
      <div>
        {Object.entries(tabs).map(([tab, tools]) =>
          tools.map(tool => (
            <ToolChip active={active === tab ? "true" : "false"} key={tool}>
              {tool}
            </ToolChip>
          ))
        )}
      </div>
    </>
  )
}
