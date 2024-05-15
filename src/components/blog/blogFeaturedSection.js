import {
  BlogFeaturedPostItem,
  SecondaryBlogFeaturedPostItem,
} from "./blogFeaturedPostItem"

import BlogBadge from "./blogBadge"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 0px 4px 20px 4px;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const SecondaryWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export default function BlogFeaturedSection({ loading, posts }) {
  const showFirst = loading || posts.length > 0
  const showSecond = loading || posts.length > 1
  const showThird = loading || posts.length > 2

  return (
    <Wrapper>
      {showFirst && (
        <BlogFeaturedPostItem post={posts[0] ?? null}>
          {posts[0] && <BlogBadge>Latest</BlogBadge>}
        </BlogFeaturedPostItem>
      )}
      <SecondaryWrapper>
        {showSecond && <SecondaryBlogFeaturedPostItem post={posts[1]} />}
        {showThird && <SecondaryBlogFeaturedPostItem post={posts[2]} />}
      </SecondaryWrapper>
    </Wrapper>
  )
}
