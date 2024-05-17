import { IconButtonLink } from "../iconButton"
import React from "react"
import styled from "styled-components"

const GitLink = styled(IconButtonLink)``

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default function PortfolioCardButtons({ git, extra, className }) {
  const githubIcon = git ? (
    <GitLink href={git ?? ""}>
      <i className="fa fa-github"></i>
    </GitLink>
  ) : null

  return (
    <Wrapper className={className}>
      {extra}
      {githubIcon}
    </Wrapper>
  )
}
