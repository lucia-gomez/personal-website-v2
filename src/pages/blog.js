import React, { useEffect, useState } from "react"

import BlogLoading from "../components/blog/blogLoading"
import BlogPostLink from "../components/blog/blogPostItem"
import { PostApi } from "../scripts/api"
import ScrollList from "../components/scrollList"
import SearchBar from "../components/searchBar"
import SectionTitle from "../components/sectionTitle"
import filterPost from "../scripts/searchBlog"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

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

const Posts = styled(ScrollList)`
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

  ~ .scroll-indicator-left {
    box-shadow: 20px 0px 80px 0px #000000ba;
  }
  ~ .scroll-indicator-right {
    box-shadow: -20px 0px 80px 0px #000000ba;
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
  const location = useLocation()
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
    PostApi.getAllPosts().then(res => {
      const d = sortByDisplayDate(res.data)
      setPosts(d)
      setSearchResults(d)
      setLoading(false)
    })
  }, [location.key])

  const searchPosts = keywords => {
    if (keywords.length === 0) {
      setSearchResults(posts)
    } else {
      const filtered = posts.filter(post => filterPost(post, keywords))
      setSearchResults(filtered)
    }
  }

  return (
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
        <Posts horizontal={true}>
          {searchResults.map((post, idx) => (
            <BlogPostWrapper key={idx}>
              <BlogPostLink post={post} />
            </BlogPostWrapper>
          ))}
        </Posts>
      )}
    </Wrapper>
  )
}
