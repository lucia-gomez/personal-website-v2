import BlogPostItemMetadata from "./blogPostItemMetadata"
import { Link } from "react-router-dom"
import React from "react"
import { blogPlaceholderImageUrl } from "../../scripts/util"
import styled from "styled-components"

const Wrapper = styled(Link)`
  display: grid;
  grid-template-columns: 150px 1fr;
  min-height: 100px;
  margin: 32px 4px;
  width: 100%;
  max-width: 1000px;
  position: relative;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  :hover {
    text-decoration: none;
    transition: transform 300ms;
  }

  @media screen and (max-width: 870px) {
    grid-template-columns: 100px 1fr;
    margin: 16px 4px;
    width: 100%;
    max-width: 100vw;

    :hover {
      transform: unset;
    }
  }
`

const Body = styled.div`
  padding: 0px 12px;
  p {
    color: ${props => props.theme.medium};
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100px;
  border-radius: 5px;
  position: relative;

  ::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to left bottom,
      ${props => props.theme.accentHover},
      #0886ea,
      ${props => props.theme.accent}
    );
    opacity: 0.5;
    filter: contrast(1.5);
  }
`

const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  filter: contrast(1.5) grayscale(1);
`

const Title = styled.h5`
  color: ${props => props.theme.text};
  width: fit-content;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`

const BlogPostLink = ({ post }) => {
  return (
    <Wrapper
      to={`/blog/${post.slug}/`}
      data-test-id="blog-post-item"
      className="blog-post"
    >
      <ImageWrapper>
        <Image image={post.imageUrl || blogPlaceholderImageUrl} />
      </ImageWrapper>
      <Body>
        <BlogPostItemMetadata post={post} />
        <Title>{post.title}</Title>
        <p>{post.summary}</p>
      </Body>
    </Wrapper>
  )
}

export default BlogPostLink
