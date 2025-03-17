import React from "react"

import PortfolioFilters from "./portfolioFilters"

export default function PortfolioFiltersSection(props) {
  const { activeFilter, setActiveFilter } = props

  return (
    <div style={{ paddingBottom: 30 }}>
      <PortfolioFilters active={activeFilter} setActive={setActiveFilter} />
    </div>
  )
}
