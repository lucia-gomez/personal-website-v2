import { IconLink } from "../externalButton"
import styled from "styled-components"

const GitLink = styled(IconLink)`
  margin-bottom: 0.5rem;
  margin-top: -2px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default function PortfolioCardButtons(props) {
  const githubIcon = props.git ? (
    <GitLink href={props.git ?? ""}>
      <div className="material-icons">
        <i className="fa fa-github"></i>
      </div>
    </GitLink>
  ) : null

  return (
    <Wrapper className={props.className}>
      {githubIcon}
      {props.link}
    </Wrapper>
  )
}
