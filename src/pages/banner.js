import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"

const Wrapper = styled.div`
  position: relative;
  top: 20vh;

  span{
    font-size: 60px;
    padding: 0px 5px;
    box-shadow: inset 0 -20px 0 0 ${props => props.theme.accent};
  }
`;

export default function BannerContent() {
  return (
    <Wrapper>
      {SectionTitle("Lucia Gomez")}
      <h3>Full-stack developer</h3>
    </Wrapper>
  )
}
