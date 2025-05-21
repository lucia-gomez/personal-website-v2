import { FilterChip, FilterRow } from "../filters"

import React from "react"
import projects from "../../contentful/personalProject.json"

const categories = [
  "All",
  ...new Set(projects.map(project => project.fields.categories).flat()),
].sort((a, b) => a.localeCompare(b))

export default function PortfolioFiltersSection(props) {
  const { activeFilter, setActiveFilter } = props

  return (
    <div style={{ paddingBottom: 30 }}>
      <FilterRow>
        {Object.values(categories).map((catName, idx) => (
          <FilterChip
            active={activeFilter === catName ? "true" : "false"}
            onClick={() => setActiveFilter(catName)}
            key={idx}
          >
            {catName}
          </FilterChip>
        ))}
      </FilterRow>
    </div>
  )
}
