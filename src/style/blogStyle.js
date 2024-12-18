import styled, { css } from "styled-components"

import { hexToRGB } from "./theme"
import { useEffect } from "react"

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
    content: "";
    position: absolute;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    width: 10px;
    height: 10px;
    top: 12px;
    left: 0px;
    transform: translateY(-50%) rotate(-45deg);
    border-color: ${props => props.theme.accent};
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

const BlogStyleWrapper = styled.div`
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
    max-height: 50vh;
    border-radius: 5px;
    margin: 40px auto 8px auto;
    display: block;

    @media screen and (max-width: 576px) {
      width: 100%;
      max-height: unset;
    }
  }
  img + img {
    margin-top: 20px;
  }
  img + em,
  video + em,
  video + p > em:only-child,
  iframe + em,
  iframe + p > em:only-child,
  audio + em,
  audio + p > em:only-child,
  table + em,
  table + p > em:only-child {
    color: ${props => props.theme.medium};
    display: block;
    max-width: 90%;
    text-align: center;
    margin: 0px auto 20px auto;
  }
  video {
    object-fit: cover;
  }
  h4 {
    padding-top: 24px;
  }
  h4 a,
  h5 a {
    color: ${props => props.theme.text};
  }
  h4 a:hover {
    color: ${props => props.theme.acccentHover};
    cursor: pointer;
    :after {
      display: inline-block;
      padding-left: 4px;
      content: "#";
    }
  }
  p > iframe {
    margin-bottom: -1rem;
  }
  iframe,
  audio {
    border-radius: 5px;
    margin: 40px auto 8px auto;
    width: 80%;
    display: block;
    max-height: 70vh;
    @media screen and (max-width: 576px) {
      width: 100%;
      max-height: unset;
    }
  }

  table img {
    /* width: 100%; */
    max-width: unset;
    height: auto;
    margin: auto;
  }

  td {
    padding: 4px;
    /* width: 50%; */
  }

  /* This media query changes the layout when the screen width is less than 600px */
  @media (max-width: 800px) {
    table {
      display: block;
    }

    tr {
      display: block;
    }

    td {
      display: block;
      width: 100%;
      text-align: center;
    }

    image {
      width: 100%;
    }
  }

  img.bom {
    max-height: unset;
    max-width: 80% !important;

    @media screen and (max-width: 876px) {
      width: 100%;
      max-width: unset !important;
      max-height: unset;
    }
  }
`

export default function BlogStyle(props) {
  useEffect(() => {
    if (props.syntaxHighlight !== true) {
      return
    }

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-material-dark.min.css"
    document.head.appendChild(link)

    // Cleanup function to remove the link when the component is unmounted
    return () => {
      document.head.removeChild(link)
    }
  }, [props.syntaxHighlight])

  return <BlogStyleWrapper>{props.children}</BlogStyleWrapper>
}
export { ul, li, a, blockquote }
