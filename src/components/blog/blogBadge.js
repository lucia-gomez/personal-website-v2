import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  padding: 0px 8px;
  background-color: ${props => props.theme.accent};
  border-radius: 50px;
  font-size: 0.8rem;
  box-shadow: ${props => hexToRGB(props.theme.bg, 0.2)} 0px 0px 20px 10px;
  text-shadow: ${props => hexToRGB(props.theme.bg, 0.8)} 0px 0px 4px;
`

export default function BlogBadge(props) {
  return <Wrapper>{props.children}</Wrapper>
}
