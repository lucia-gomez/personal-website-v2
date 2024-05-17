import React from "react"
import { profilePicUrl } from "../../scripts/util"
import styled from "styled-components"

export default function ProfilePic(props) {
  return (
    <Wrapper className={props.className}>
      <Photo src={profilePicUrl} alt="profile" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${props => props.theme.accent};
  border-radius: 300px;
  height: 15vw;
  width: 15vw;
  max-height: 300px;
  max-width: 300px;
  @media only screen and (max-width: 850px) {
    height: 40vw;
    width: 40vw;
  }

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      ${props => (props.idx % 2 === 0 ? "to left bottom" : "to right bottom")},
      ${props => props.theme.accentHover} 40%,
      ${props => props.theme.accent} 90%
    );
    opacity: 0.5;
    filter: contrast(1.5);
  }
`

const Photo = styled.img`
  border-radius: 300px;
  width: 100%;
  filter: contrast(1.5);
  mix-blend-mode: luminosity;
  margin: auto;
  background: white;
`
