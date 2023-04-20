import styled, { css } from "styled-components"

import React from "react"

const gradientTopWithBg = css`
  background: linear-gradient(
    to bottom,
    #cc5e25 20%,
    #493153,
    ${props => props.theme.bg}
  );
`

const gradientTopWithoutBg = css`
  background: linear-gradient(to bottom, #cc5e25 20%, #493153);
`

const gradientWhole = css`
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

export const gradientWithBg = css`
  ${gradientTopWithBg}
  ${gradientWhole}
`

export const gradientWithoutBg = css`
  ${gradientTopWithoutBg}
  ${gradientWhole}
`

const GradientBg = styled.div`
  position: absolute;
  height: var(--doc-height);
  width: 100%;
  z-index: -1;
  ${gradientWithBg}
`

export default function GradientBackground() {
  return <GradientBg />
}
