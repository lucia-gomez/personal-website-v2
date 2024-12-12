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

/* Posts are in reverse chronological order. Previous is older, next is newer */
export default function BlogNavButtons(props) {
  const { nextSlug, prevSlug, className } = props
  return (
    <NavButtons className={className}>
      {nextSlug != null ? (
        <NavButton to={nextSlug} sameTab={true} data-test-id="nav-next">
          <ion-icon name="chevron-back" style={{ fontSize: 24 }}></ion-icon>
          Newer
        </NavButton>
      ) : (
        <div />
      )}
      {prevSlug != null ? (
        <NavButton to={prevSlug} sameTab={true} data-test-id="nav-prev">
          Older
          <ion-icon name="chevron-forward" style={{ fontSize: 24 }}></ion-icon>
        </NavButton>
      ) : (
        <div />
      )}
    </NavButtons>
  )
}
