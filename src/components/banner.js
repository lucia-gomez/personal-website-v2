import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 70px;
  color: #000;
  mix-blend-mode: color-dodge;
  margin: 0;
  margin-bottom: 20vh;
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
      <Title>Lucia Gomez</Title>
    </Wrapper>
  )
}
