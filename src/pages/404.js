import Image404 from "../assets/images/404-office.gif"
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
  }
`

export default function Error404() {
  return (
    <Error404Wrapper>
      <SectionTitle>Page not found</SectionTitle>
      <img src={Image404} alt="the office cringe GIF" />
    </Error404Wrapper>
  )
}
