import React, { useEffect, useState } from "react"
import { Redirect, useParams } from "react-router-dom"

import Axios from "axios"
import Back from "../components/blog/back"
import BlogContent from "../components/blog/blogContent"
import BlogLoading from "../components/blog/blogLoading"
import EditorPopup from "../components/blog/editorPopup"
import Sidebar from "../components/blog/sidebar"
import { getApiUrl } from "../scripts/util"
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

// nav, page content, footer
const BlogWrapper = styled.div`
  padding: 50px 0px;
`

// side bar, blog content
const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`

const Content = styled.div`
  text-align: left;
  overflow-y: scroll;
  padding: 0px 20px;

  @media screen and (min-width: 576px) {
    padding-left: 0px;
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
  mix-blend-mode: darken;
  filter: grayscale(1);

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(to bottom, transparent 70%, white 130%);
  }
`

const Title = styled.h1`
  color: ${props => props.theme.text};
  font-weight: 900;
  margin: 0px;
  padding-right: 10px;
`

const EditWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
`

const SidebarDesktop = styled(Sidebar)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const SidebarMobile = styled(Sidebar)`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const BackWrapper = styled(Back)`
  margin-left: 0px;
  padding-top: 20px;
`

export default function BlogPostPage() {
  const { isAuthenticated } = useAuth0()
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Axios.get(getApiUrl() + "/api/get/" + slug).then(res => {
      setPost(res.data[0] ?? null)
      setLoading(false)
    })
  }, [slug])

  if (post === null && !loading) {
    return <Redirect to="/404" />
  }

  return (
    <BlogWrapper>
      {!loading ? (
        <>
          <Header>
            <HeaderImage imageUrl={post.imageUrl} />
            <div style={{ padding: 20 }}>
              <BackWrapper link="/blog" />
              <Title>{post.title}</Title>
              <EditWrapper>
                {isAuthenticated ? <EditorPopup post={post} /> : null}
              </EditWrapper>
              <div>
                {post.dateString.substring(0, post.dateString.indexOf(","))}
                <p>Lucia Gomez</p>
              </div>
            </div>
          </Header>
          <ContentWrapper>
            <SidebarDesktop post={post} />
            <>
              <Content>
                <BlogContent content={post.content} />
              </Content>
              <SidebarMobile post={post} />
            </>
          </ContentWrapper>
        </>
      ) : (
        <BlogLoading />
      )}
    </BlogWrapper>
  )
}
