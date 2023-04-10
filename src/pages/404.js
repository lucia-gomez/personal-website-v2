import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Image404 from "../assets/images/404-office.gif"

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
    <Layout>
      <Error404Wrapper>
        {SectionTitle("Page not found")}
        <img src={Image404} alt="the office cringe GIF" />
      </Error404Wrapper>
    </Layout>
  )
}
