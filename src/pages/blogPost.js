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
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-rows: 75px calc(100vh - 75px);
  }

  @media screen and (max-width: 768px) {
    display: block;
    padding: 75px 20px 50px 20px;
  }
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
  padding-right: 20px;
`

const Title = styled.h1`
  color: ${props => props.theme.text};
  font-weight: 900;
  margin: 0px;
  padding-right: 10px;
`

const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
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

const BackMobile = styled(Back)`
  margin-left: 0px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (post === null && !loading) {
    return <Redirect to="/404" />
  }

  return (
    <BlogWrapper>
      <BackMobile link="/blog" />
      <div />
      <ContentWrapper>
        <SidebarDesktop post={post} />
        {!loading ? (
          <Content>
            <EditWrapper>
              <Title>{post.title}</Title>
              {isAuthenticated ? <EditorPopup post={post} /> : null}
            </EditWrapper>
            <div>
              {post.dateString.substring(0, post.dateString.indexOf(","))}
              <p>Lucia Gomez</p>
            </div>
            <BlogContent content={post.content} />
          </Content>
        ) : (
          <BlogLoading />
        )}
        <SidebarMobile post={post} />
      </ContentWrapper>
    </BlogWrapper>
  )
}
