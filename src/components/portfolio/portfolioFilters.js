import React from "react"
import styled from "styled-components"
import { hexToRGB } from "../../style/theme"
import { category } from "../../scripts/projectList"
import SearchBar from "../searchBar"

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 10px;

  label {
    padding-right: 8px;
    margin: 0;
  }
`

const FilterItem = styled.div`
  border-radius: 8px;
  background-color: ${props =>
    props.active === "true"
      ? props.theme.accent
      : hexToRGB(props.theme.medium, 0.5)};
  color: ${props =>
    props.active === "true" ? props.theme.textInv : props.theme.text};
  padding: 2px 8px;
  margin: 4px 8px 4px 0px;
  cursor: pointer;
  transition: background-color 150ms, color 150ms, transform 150ms;

  :hover {
    background-color: ${props => props.theme.accentHover};
    color: ${props => props.theme.text};
    transform: scale(1.05);
  }
`

export default function PortfolioFilters({
  active,
  setActive,
  searchProjects,
}) {
  return (
    <>
      <FilterRow>
        <label>Keywords</label>
        <SearchBar callback={searchProjects} placeholder="Ex: React, drink" />
      </FilterRow>
      <FilterRow>
        <label>Project category</label>
        {Object.entries(category).map(([catName, catNum], idx) => (
          <FilterItem
            active={active === catNum ? "true" : "false"}
            onClick={() => setActive(catNum)}
            key={idx}
          >
            {catName}
          </FilterItem>
        ))}
      </FilterRow>
    </>
  )
}
