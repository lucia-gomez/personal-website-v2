import {
  BlogPostMetadata,
  BlogPostMetadataLarge,
} from "../components/blog/blogPostMetadata"
import { Navigate, useLocation, useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"

import Back from "../components/blog/back"
import BlogContent from "../components/blog/blogContent"
import BlogLoading from "../components/blog/blogLoading"
import BlogNavButtons from "../components/blog/blogNavButtons"
import EditorPopup from "../components/editor/editorPopup"
import { PostApi } from "../scripts/api"
import { blogPlaceholderImageUrl } from "../scripts/util"
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

  @media screen and (min-width: 576px) {
    min-height: 310px;
  }
`

const HeaderImage = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  mix-blend-mode: overlay;
  filter: grayscale(1);

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }
`

const HeaderContent = styled.div`
  width: 50%;
  padding: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
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
  top: 12px;
`

const BackWrapper = styled(Back)`
  margin-left: 0px;
  padding-top: 20px;
`

export default function BlogPostPage() {
  const { isAuthenticated } = useAuth0()
  const { slug } = useParams()
  const location = useLocation()
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
  }, [slug, location.key])

  if (post === null && !loading) {
    return <Navigate to="/404" />
  }

  return (
    <BlogWrapper>
      {!loading ? (
        <>
          <Header>
            <HeaderImage imageUrl={post.imageUrl || blogPlaceholderImageUrl} />
            <HeaderContent>
              <BackWrapper link="/blog" />
              <Title>{post.title}</Title>
              <EditWrapper>
                {isAuthenticated ? <EditorPopup post={post} /> : null}
              </EditWrapper>
              <BlogPostMetadata post={post} />
            </HeaderContent>
          </Header>
          <ContentWrapper>
            <>
              <Content className="animate__animated animate__fadeIn">
                <BlogContent content={post.content} />
                <BlogPostMetadataLarge post={post} />
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
        </>
      ) : (
        <BlogLoading />
      )}
    </BlogWrapper>
  )
}
