import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import Section from '../../components/section'
import SectionTitle from '../../components/sectionTitle'

const Wrapper = styled.div`
  position: relative;
  top: 20vh;
`;

const Text = styled.p`
  max-width: 400px;
  margin: auto;

  @media only screen and (max-width: 576px) {
    max-width: 90vw;
  }
`;

export default function ToadARPage() {
  return (
    <Layout>
      <Section id='toad-AR' index={-1}>
        <Wrapper>
          {SectionTitle('Toad AR Effect')}
          <Text>Thanks for reading <i>Let's Normalize Screaming Like Toad</i>. 
          To get the full experience, try out the AR effect in Instagram.</Text>
          <br/>
          <p>(Warning: loud noises)</p>
        </Wrapper>
      </Section>
    </Layout>
  )
}