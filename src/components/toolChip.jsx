import styled from "styled-components"

export const ToolChip = styled.p`
  border-radius: 5px;
  border: 1px solid
    ${props =>
      props.active === "true" ? props.theme.accent : props.theme.medium};
  color: ${props =>
    props.active === "true" ? props.theme.accent : props.theme.medium};
  padding: 0px 4px;
  margin: 0px 4px 0px 0px;
  font-size: 0.8rem;
  display: inline-block;
`
