import styled, { css } from "styled-components"

import { hexToRGB } from "./theme"

const ul = css`
  padding-left: 0px;
  list-style: none;
`

const li = css`
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

const blockquote = css`
  background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
  border-left: 6px solid ${props => props.theme.accent};
  border-radius: 0px 5px 5px 0px;
  color: ${props => hexToRGB(props.theme.text, 0.5)};
  padding: 8px;

  p {
    margin: 0;
  }
`

const BlogStyle = styled.div`
  padding-bottom: 20px;
  ul {
    ${ul}
  }
  ul li {
    ${li}
  }
  a {
    ${a}
  }
  blockquote {
    ${blockquote}
  }
  pre {
    background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
    color: ${props => props.theme.text};
    border-radius: 5px;
  }
  img {
    height: 100%;
    max-width: 100% !important;
    max-height: 70vh;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`

export default BlogStyle
export { ul, li, a, blockquote }
