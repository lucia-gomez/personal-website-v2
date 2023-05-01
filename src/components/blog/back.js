import Link from "../link"
import styled from "styled-components"

const BackButton = styled(Link)`
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
  display: block;
`

const Back = ({ className, link }) => {
  return (
    <BackButton to={link} sameTab={true} className={className}>
      <i className="fas fa-chevron-left" style={{ paddingRight: "3px" }} />
      Back
    </BackButton>
  )
}

export default Back
