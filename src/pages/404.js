import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Section from '../components/section'
import SectionTitle from '../components/sectionTitle'
import Image404 from "../assets/images/404-office.gif";

const Error404Wrapper = styled.div`
  position: relative;
  top: 20vh;

  img {
    border-radius: 50px;
  }
`;

export default function Error404() {
  return (
    <Layout>
      <Section id='404-section' index={-1}>
        <Error404Wrapper>
          {SectionTitle('Page not found :(')}
          <h4>Error 404</h4>
          <img src={Image404} alt="the office cringe GIF" />
        </Error404Wrapper>
      </Section>
    </Layout>
  )
}