import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import BlogPostLink from "../components/blog/blogPostItem"
import BlogLoading from "../components/blog/blogLoading"
import Axios from "axios"
import { getApiUrl } from "../scripts/util"
import SearchBar from "../components/searchBar"
import { useTransition, animated } from "@react-spring/web"
import filterPost from "../scripts/searchBlog"

const Wrapper = styled.div`
  padding: 65px 20px 50px 20px;
  max-height: var(--doc-height);
  display: grid;
  grid-template-rows: auto 1fr;
`

const BlogSearchBar = styled(SearchBar)`
  @media screen and (max-width: 576px) {
    width: fit-content;
    margin: auto;
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding-bottom: 20px;
  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }
`

const AnimatedBlogPost = styled(animated.div)`
  margin: 0px 30px 0px 0px;
  height: 100%;

  :last-child {
    margin-right: 0px;
    @media screen and (max-width: 576px) {
      padding-right: 20px;
    }
  }
`

export default function BlogHomePage() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState(posts)
  const [loading, setLoading] = useState(true)

  const sortByDisplayDate = posts =>
    posts.sort((a, b) => {
      const date1 = new Date(a.dateString)
      const date2 = new Date(b.dateString)
      return date2 - date1
    })

  useEffect(() => {
    setLoading(true)
    Axios.get(getApiUrl() + "/api/get").then(res => {
      const d = sortByDisplayDate(res.data)
      setPosts(d)
      setSearchResults(d)
      setLoading(false)
    })
  }, [])

  const searchPosts = keywords => {
    if (keywords.length === 0) {
      setSearchResults(posts)
    } else {
      const filtered = posts.filter(post => filterPost(post, keywords))
      setSearchResults(filtered)
    }
  }

  const searchAnimation = useTransition(searchResults, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxWidth: 350 },
    leave: { opacity: 0, maxWidth: 0 },
  })

  return (
    <Layout>
      <Wrapper>
        <div>
          <SectionTitle>Blog</SectionTitle>
          {loading && <BlogLoading />}
          {!loading && (
            <BlogSearchBar
              callback={searchPosts}
              placeholder="Ex: Heroku, database"
            />
          )}
        </div>
        {!loading && searchResults.length === 0 ? (
          <p style={{ padding: "20px 0px" }}>No posts found :(</p>
        ) : (
          <Posts>
            {searchAnimation((style, post) => (
              <AnimatedBlogPost style={style}>
                <BlogPostLink post={post} />
              </AnimatedBlogPost>
            ))}
          </Posts>
        )}
      </Wrapper>
    </Layout>
  )
}
