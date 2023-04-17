import React, { useEffect, useState } from "react"

import Axios from "axios"
import BlogLoading from "../components/blog/blogLoading"
import BlogPostLink from "../components/blog/blogPostItem"
import HorizontalScroller from "../components/horizontalScroller"
import Layout from "../components/layout/layout"
import SearchBar from "../components/searchBar"
import SectionTitle from "../components/sectionTitle"
import filterPost from "../scripts/searchBlog"
import { getApiUrl } from "../scripts/util"
import styled from "styled-components"

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

const Posts = styled(HorizontalScroller)`
  margin-top: 20px;
  padding-bottom: 20px;
  overflow-y: hidden;

  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }

  .scroll-item:last-child .blog-post {
    margin-right: 0px;
    @media screen and (max-width: 576px) {
      margin-right: 20px;
    }
  }
`

const BlogPostWrapper = styled.div.attrs(_ => ({
  className: "blog-post",
}))`
  margin: 0px 30px 0px 0px;
  height: 100%;
  border-radius: 5px;
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
            {searchResults.map((post, idx) => (
              <BlogPostWrapper key={idx}>
                <BlogPostLink post={post} />
              </BlogPostWrapper>
            ))}
          </Posts>
        )}
      </Wrapper>
    </Layout>
  )
}
