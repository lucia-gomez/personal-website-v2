import { Link } from "react-router-dom"
import styled from "styled-components"

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.accent};
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`

/* Posts are in reverse chronological order. Previous is newer, next is older */
export default function BlogNavButtons({ nextPostSlug, prevPostSlug }) {
  return (
    <NavButtons>
      {prevPostSlug != null ? (
        <NavButton to={`/blog/${prevPostSlug.slug}/`}>
          <i
            className="fas fa-chevron-left"
            style={{ paddingRight: "3px" }}
          ></i>
          Previous post
        </NavButton>
      ) : (
        <div />
      )}
      {nextPostSlug != null ? (
        <NavButton to={`/blog/${nextPostSlug.slug}/`}>
          Next post
          <i
            className="fas fa-chevron-right"
            style={{ paddingLeft: "3px" }}
          ></i>
        </NavButton>
      ) : (
        <div />
      )}
    </NavButtons>
  )
}
