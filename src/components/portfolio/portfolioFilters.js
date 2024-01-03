import React from "react"
import SearchBar from "../searchBar"
import { category } from "../../scripts/projectList"
import styled from "styled-components"

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
  border: ${props =>
    props.active === "true" ? "none" : `1px solid ${props.theme.accent}`};
  background-color: ${props =>
    props.active === "true" ? props.theme.accent : props.theme.bg};
  color: ${props =>
    props.active === "true" ? props.theme.textInv : props.theme.accent};
  padding: 2px 8px;
  margin: 4px 8px 4px 0px;
  cursor: pointer;
  transition: background-color 150ms, color 150ms;

  :hover {
    border: ${props =>
      props.active === "true"
        ? "none"
        : `1px solid ${props.theme.accentHover}`};
    color: ${props =>
      props.active === "true" ? props.theme.bg : props.theme.accentHover};
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
