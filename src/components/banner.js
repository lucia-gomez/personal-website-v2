import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Gradient = styled.div`
  position: absolute;
  background: linear-gradient(
    to bottom,
    #cc5e25 20%,
    #493153,
    ${props => props.theme.bg}
  );
  height: 100%;
  width: 100%;
  z-index: -1;

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
const Title = styled.h1`
  font-size: 70px;
  color: #000;
  mix-blend-mode: color-dodge;
  margin: 0;
  text-align: center;
  animation: fade-in 1s 500ms forwards ease-in;

  @keyframes fade-in {
    from {
      color: #000;
    }
    to {
      color: #9d9d9d;
    }
  }
`

export default function BannerContent() {
  return (
    <Wrapper>
      <Gradient />
      <Title>Lucia Gomez</Title>
    </Wrapper>
  )
}
