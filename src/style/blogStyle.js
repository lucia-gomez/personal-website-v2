import styled, { css } from 'styled-components';

const ul = css`
  padding-left: 0px;
  list-style: none;

  ul {
    padding-left: 20px;
  }
`;

const li = css`
  padding-bottom: 5px;
  padding-left: 20px;
  position: relative;

  :not(ol)::before {
    font-family: "FontAwesome";
    content: '\f054';
    color: ${props => props.theme.accent};
    position: absolute;
    left: 0px;
  }
`;

const a = css`
  color: ${props => props.theme.accent};

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`;

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
    background-color: ${props => props.theme.bg};
    padding: 10px;
    border-radius: 5px;
  }
  img {
    height: 100%;
    width: 100%;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.45);
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export default BlogStyle;
export { ul, li, a };