import styled, { css } from "styled-components"

import { hexToRGB } from "./theme"

const ul = css`
  padding-left: 0px;
  list-style: none;
`

const li = css`
  padding-left: 20px;
  position: relative;
  :not(li li) {
    padding-bottom: 12px;
  }

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
    background-color: ${props => hexToRGB(props.theme.medium, 0.1)};
    color: ${props => props.theme.text};
    border-radius: 5px;
  }
  code {
    color: ${props => hexToRGB(props.theme.text, 0.6)};
  }
  img,
  video {
    height: 100%;
    max-width: 100% !important;
    max-height: 70vh;
    border-radius: 5px;
    margin-right: 20px;
    display: block;

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
  img + img {
    margin-top: 20px;
  }
  img + em {
    color: ${props => props.theme.medium};
  }
  video {
    object-fit: cover;
  }
  h4 {
    padding-top: 24px;
  }
  iframe {
    margin-bottom: 24px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
`

export default BlogStyle
export { ul, li, a, blockquote }
