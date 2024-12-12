import { IconButtonLink } from "../iconButton"
import styled from "styled-components"

const GitLink = styled(IconButtonLink)``

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default function PortfolioCardButtons({ git, extra, className }) {
  const githubIcon = git ? (
    <GitLink href={git ?? ""}>
      <ion-icon name="logo-github" style={{ fontSize: 24 }}></ion-icon>
    </GitLink>
  ) : null

  return (
    <Wrapper className={className}>
      {githubIcon}
      {extra}
    </Wrapper>
  )
}
