import React, { useState } from "react"
import styled from "styled-components"
import { hexToRGB } from "../style/theme"

const Input = styled.input`
  width: 300px;
  height: 30px;
  background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
  color: ${props => props.theme.text};
  border-radius: 8px;
  border: 2px solid
    ${props => (props.isActive ? props.theme.accentHover : props.theme.accent)};
  padding: 5px 10px 5px 25px;

  :focus-visible {
    outline: none;
    border: 2px solid ${props => props.theme.accentHover};
  }

  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder,
  :-moz-placeholder {
    color: ${props => hexToRGB(props.theme.textLight, 0.7)};
  }
`

const Icon = styled.i`
  position: absolute;
  top: 25%;
  left: 8px;
  color: ${props =>
    props.isActive ? props.theme.accentHover : props.theme.accent};
  z-index: 1;
`

const SearchBar = ({ callback, placeholder }) => {
  const [isFocused, setFocused] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const handleChange = e => {
    const query = e.target.value.trim()
    const keywords = query
      .split(",")
      .map(x => x.trim())
      .filter(x => x.length > 0)
    callback(keywords)
  }

  return (
    <div style={{ position: "relative" }}>
      <Icon isActive={isFocused || isHovered} className="fas fa-search" />
      <Input
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        isActive={isFocused || isHovered}
      />
    </div>
  )
}

export default SearchBar
