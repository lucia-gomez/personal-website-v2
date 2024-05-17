import Link from "../link"
import React from "react"
import styled from "styled-components"

const BackButton = styled(Link)`
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
  display: block;
`

const Back = ({ className, link, ...props }) => {
  return (
    <BackButton to={link} sameTab={true} className={className} {...props}>
      <i className="fas fa-chevron-left" style={{ paddingRight: "3px" }} />
      Back
    </BackButton>
  )
}

export default Back
