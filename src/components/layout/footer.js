import styled from "styled-components"

const FooterStyle = styled.footer`
  font-size: 14px;
  opacity: 0.5;
  padding: 16px;
  position: absolute;
  bottom: 0;
`

export default function Footer(props) {
  return <FooterStyle style={props.style}>© Lucia Gomez 2023</FooterStyle>
}
