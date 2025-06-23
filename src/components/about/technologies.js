import React, { useState } from "react"
import { FilterChip, FilterRow } from "../filters"
import { ToolChip } from "../toolChip"
import aboutPage from "../../contentful/about.json"
import useContentfulPreview from "../../contentful/useContentfulPreview"

export default function TechnologiesSection() {
  const [active, setActive] = useState(null)
  const preview = useContentfulPreview()
  const content = preview ?? aboutPage

  const tabs = {
    "Creative Technology": content.fields.creativeTechTools,
    "Rapid Prototyping": content.fields.rapidPrototypingTools,
    Graphics: content.fields.graphicsTools,
    Frontend: content.fields.frontendTools,
    "UI Frameworks": content.fields.uiFrameworks,
    Backend: content.fields.backendTools,
    Languages: content.fields.languages,
    Hosting: content.fields.hosting,
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
