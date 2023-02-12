import React from 'react'
import styled from 'styled-components'
import { InstagramButton } from '../../components/button'
import Layout from '../../components/layout'
import SectionTitle from '../../components/sectionTitle'

const Wrapper = styled.div`
  position: relative;
  top: 27vh;
  max-width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.p`
  width: 500px;
  margin: auto;
  max-width: 90vw;
`;

export default function ToadARPage() {
  return (
    <Layout>
      {/* <Section id='toad-AR' index={-1}> */}
        <Wrapper>
          {SectionTitle('Toad AR Effect')}
          <Text>Thanks for reading <i>Let's Normalize Screaming Like Toad</i>. 
          To get the full experience, try out the AR effect in Instagram. 
          You'll need a physical copy of the zine for this</Text>
          <br/>
          <p>(Warning: loud noises)</p>
          <InstagramButton href="https://www.instagram.com/ar/575344457802728/">Open in Instagram</InstagramButton>
        </Wrapper>
      {/* </Section> */}
    </Layout>
  )
}