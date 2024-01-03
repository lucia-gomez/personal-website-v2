import { IconButtonLink } from "../iconButton"
import styled from "styled-components"

const GitLink = styled(IconButtonLink)`
  margin-bottom: 0.5rem;
  margin-top: -2px;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default function PortfolioCardButtons({ git, extra, className }) {
  const githubIcon = git ? (
    <GitLink href={git ?? ""}>
      <div className="material-icons">
        <i className="fa fa-github"></i>
      </div>
    </GitLink>
  ) : null

  return (
    <Wrapper className={className}>
      {extra}
      {githubIcon}
    </Wrapper>
  )
}
