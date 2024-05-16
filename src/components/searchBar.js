import React, { useRef, useState } from "react"

import Input from "./input"
import debounce from "lodash/debounce"

const SearchBar = ({ callback, placeholder, className }) => {
  const [isFocused, setFocused] = useState(false)
  const [isHovered, setHovered] = useState(false)
  const debouncedCallback = useRef(
    debounce(arg => {
      callback(arg)
    }, 200)
  ).current

  const handleChange = e => {
    const query = e.target.value.trim()
    const keywords = query
      .split(",")
      .map(x => x.trim())
      .filter(x => x.length > 0)
    debouncedCallback(keywords)
  }

  return (
    <div className={className}>
      <Input
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        isActive={isFocused || isHovered}
        iconClassName="fas fa-search"
      />
    </div>
  )
}

export default SearchBar
