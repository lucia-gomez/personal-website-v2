import SearchBar from "../searchBar"
import Skeleton from "react-loading-skeleton"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Wrapper = styled.div`
  animation-duration: 500ms;
  --webkit-animation-duration: 500ms;

  &.hidden {
    visibility: hidden;
  }

  width: 25%;

  @media screen and (max-width: 870px) {
    width: 50%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

const Search = styled(SearchBar)`
  padding: 4px;
`

export default function BlogSearchBar({ searchPosts, loading = false }) {
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
      {loading ? (
        <Skeleton />
      ) : (
        <Search callback={searchPosts} placeholder="Ex: React, 3D" />
      )}
    </Wrapper>
  )
}
