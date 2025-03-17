import React from "react"
import { category } from "../../scripts/projectList"
import { FilterChip, FilterRow } from "../filters"

export default function PortfolioFilters({ active, setActive }) {
  return (
    <FilterRow>
      {Object.entries(category).map(([catName, catNum], idx) => (
        <FilterChip
          active={active === catNum ? "true" : "false"}
          onClick={() => setActive(catNum)}
          key={idx}
        >
          {catName}
        </FilterChip>
      ))}
    </FilterRow>
  )
}
