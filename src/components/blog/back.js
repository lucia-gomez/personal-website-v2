import Link from "../link"
import styled from "styled-components"

const BackButton = styled(Link)`
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
  display: block;
`

const Back = ({ className, link, ...props }) => {
  return (
    <BackButton to={link} sameTab={true} className={className} {...props}>
      <ion-icon
        name="chevron-back"
        style={{ fontSize: 24, marginBottom: -6 }}
      ></ion-icon>
      Back
    </BackButton>
  )
}

export default Back
