import SearchBar from "../searchBar"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Wrapper = styled.div`
  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;

  &.hidden {
    visibility: hidden;
  }
`

const Search = styled(SearchBar)`
  padding: 4px;
  width: 25%;

  @media screen and (max-width: 870px) {
    width: 50%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export default function BlogSearchBar({ searchPosts }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px 0px",
  })

  const getClassName = () => {
    if (!inView) return "hidden"
    return "animate__fadeIn"
  }

  return (
    <Wrapper className={`animate__animated ${getClassName()}`} ref={ref}>
      <Search callback={searchPosts} placeholder="Ex: React, 3D" />
    </Wrapper>
  )
}
