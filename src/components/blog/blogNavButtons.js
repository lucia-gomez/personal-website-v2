import Link from "../link"
import styled from "styled-components"

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  text-shadow: 0 0 5px ${props => props.theme.bg};
  margin: 5px;
`

/* Posts are in reverse chronological order. Previous is newer, next is older */
export default function BlogNavButtons(props) {
  const { nextSlug, prevSlug, className } = props
  return (
    <NavButtons className={className}>
      {prevSlug != null ? (
        <NavButton to={prevSlug} sameTab={true}>
          <i
            className="fas fa-chevron-left"
            style={{ paddingRight: "3px" }}
          ></i>
          Previous
        </NavButton>
      ) : (
        <div />
      )}
      {nextSlug != null ? (
        <NavButton to={nextSlug} sameTab={true}>
          Next
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
