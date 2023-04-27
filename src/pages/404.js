import React from "react"
import SectionTitle from "../components/sectionTitle"
import styled from "styled-components"

const Error404Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    border-radius: 5px;
    mix-blend-mode: luminosity;
  }
`

export default function Error404() {
  return (
    <Error404Wrapper>
      <SectionTitle>Page not found</SectionTitle>
      <img
        src="https://ik.imagekit.io/5xtlzx2c3y/website/404.gif"
        alt="the office cringe GIF"
      />
    </Error404Wrapper>
  )
}
