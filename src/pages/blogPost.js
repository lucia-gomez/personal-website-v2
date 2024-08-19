import {
  BlogPostMetadata,
  BlogPostMetadataLarge,
} from "../components/blog/blogPostMetadata"
import { Navigate, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"

import Back from "../components/blog/back"
import BlogContent from "../components/blog/blogContent"
import BlogGradientBanner from "../components/blog/blogGradientBanner"
import BlogNavButtons from "../components/blog/blogNavButtons"
import EditorPopup from "../components/editor/editorPopup"
import { PostApi } from "../scripts/api"
import Skeleton from "react-loading-skeleton"
import { hexToRGB } from "../style/theme"
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

// nav, page content, footer
const BlogWrapper = styled.div`
  padding: 50px 0px;
`

const ContentWrapper = styled.div`
  position: relative;
  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`

const Content = styled.div`
  text-align: left;
  overflow-y: scroll;
  padding: 0px 20px;
  margin: auto;
  width: 100%;

  @media screen and (min-width: 576px) {
    padding-left: 0px;
    width: 70%;
  }
`

const Header = styled.div`
  position: relative;
  height: fit-content;
  margin-bottom: 20px;
  text-shadow: 0 0 20px ${props => props.theme.bg};
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 576px) {
    min-height: 310px;
  }
`

const HeaderImage = styled(BlogGradientBanner)`
  ::after {
    height: 120%;
    bottom: -2px;
    background: linear-gradient(
      to top,
      ${props => hexToRGB(props.theme.bg, 0.95)} 0%,
      ${props => hexToRGB(props.theme.bg, 0.2)} 100%
    );
  }

  .image {
    background-position-y: center;
    border-radius: 0px;
  }
`

const HeaderContent = styled.div`
  align-self: flex-end;
  margin: 0px auto;
  width: 70%;
  padding: 20px 0px;

  @media screen and (max-width: 576px) {
    width: 100%;
    position: relative;
    padding: 20px;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.text};
  margin: 0px;
  padding-right: 10px;
`

const EditWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 24px;
  z-index: 10;
`

const BackWrapper = styled(Back)`
  margin-left: 0px;
  padding-top: 20px;
`

export default function BlogPostPage() {
  const { isAuthenticated } = useAuth0()
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [nextPostSlug, setNextPostSlug] = useState(null)
  const [prevPostSlug, setPrevPostSlug] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    PostApi.getPost(slug)
      .then(res => {
        setPost(res.data ?? null)
        setLoading(false)
      })
      .catch(_ => {
        setLoading(false)
      })
    PostApi.getNextPost(slug).then(res => {
      setNextPostSlug(res.data || null)
    })
    PostApi.getPrevPost(slug).then(res => {
      setPrevPostSlug(res.data || null)
    })
  }, [slug])

  if (post === null && !loading) {
    return <Navigate to="/404" />
  }

  return (
    <BlogWrapper>
      <Header>
        <EditWrapper data-test-id="blog-post-edit-btn">
          {isAuthenticated ? <EditorPopup post={post} /> : null}
        </EditWrapper>
        <HeaderImage post={post} />
        <HeaderContent>
          <BackWrapper link="/blog" data-test-id="blog-back-btn" />
          <Title data-test-id="blog-post-title">
            {post?.title || <Skeleton />}
          </Title>
          <BlogPostMetadata post={post} data-test-id="blog-post-metadata" />
        </HeaderContent>
      </Header>
      <ContentWrapper>
        <>
          <Content className="animate__animated animate__fadeIn">
            {post ? (
              <BlogContent
                content={post.content}
                data-test-id="blog-post-content"
              />
            ) : (
              <Skeleton count={10} />
            )}
            {post && <BlogPostMetadataLarge post={post} />}
            <BlogNavButtons
              nextSlug={
                nextPostSlug != null ? `/blog/${nextPostSlug.slug}/` : null
              }
              prevSlug={
                prevPostSlug != null ? `/blog/${prevPostSlug.slug}/` : null
              }
            />
          </Content>
        </>
      </ContentWrapper>
    </BlogWrapper>
  )
}
