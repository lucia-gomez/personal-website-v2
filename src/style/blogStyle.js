import styled, { css } from "styled-components"

import { hexToRGB } from "./theme"

const ul = css`
  padding-left: 0px;
  list-style: none;

  ul {
    padding-left: 20px;
  }
`

const li = css`
  padding-bottom: 5px;
  padding-left: 20px;
  position: relative;

  :not(ol)::before {
    font-family: "FontAwesome";
    content: "\f054";
    color: ${props => props.theme.accent};
    position: absolute;
    left: 0px;
  }
`

const a = css`
  color: ${props => props.theme.accent};
  display: contents;
  transition: color 200ms;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`

const BlogStyle = styled.div`
  ul {
    ${ul}
  }
  ul li {
    ${li}
  }
  a {
    ${a}
  }
  pre {
    background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
    color: ${props => props.theme.text};
    padding: 10px;
    border-radius: 5px;
  }
  img {
    height: 100%;
    max-width: 100% !important;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`

export default BlogStyle
export { ul, li, a }
