import styled from "styled-components"

export const FilterRow = styled.div`
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

const Chip = styled.div`
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

export function FilterChip({ active, onClick, idx, children }) {
  return (
    <Chip active={active} onClick={onClick} key={idx}>
      {children}
    </Chip>
  )
}
