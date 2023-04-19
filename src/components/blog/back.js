import { Link } from "react-router-dom"
import styled from "styled-components"

const BackButton = styled(Link)`
  color: ${props => props.theme.accent};
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
  display: block;
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`

const Back = ({ className, link }) => {
  return (
    <BackButton to={link} className={className}>
      <i className="fas fa-chevron-left" style={{ paddingRight: "3px" }} />
      Back
    </BackButton>
  )
}

export default Back
