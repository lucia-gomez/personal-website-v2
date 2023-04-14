import React from "react"
import styled, { css } from "styled-components"

export const gradient = css`
  background: linear-gradient(
    to bottom,
    #cc5e25 20%,
    #493153,
    ${props => props.theme.bg}
  );

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: inherit;
    background: linear-gradient(
      to top,
      ${props => props.theme.bg},
      #1e5351,
      ${props => props.theme.accent}
    );
    mask-image: linear-gradient(to left, white, transparent);
    -webkit-mask-image: linear-gradient(to left, white, transparent);
  }
`

const GradientBg = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
  ${gradient}
`

export default function GradientBackground() {
  return <GradientBg />
}
