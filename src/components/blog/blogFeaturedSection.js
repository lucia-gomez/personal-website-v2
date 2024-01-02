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

export default function BlogFeaturedSection({ posts }) {
  return (
    <Wrapper>
      {posts.length > 0 && (
        <BlogFeaturedPostItem post={posts[0]}>
          <BlogBadge>Latest</BlogBadge>
        </BlogFeaturedPostItem>
      )}
      <SecondaryWrapper>
        {posts.length > 1 && <SecondaryBlogFeaturedPostItem post={posts[1]} />}
        {posts.length > 2 && <SecondaryBlogFeaturedPostItem post={posts[2]} />}
      </SecondaryWrapper>
    </Wrapper>
  )
}
