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
  display: grid;
  grid-template-rows: auto 1fr;
`

const TopSection = styled.div`
  padding: 65px 20px 0px;
`

const Posts = styled(ScrollList)`
  margin: ${props => (props.horizontal ? "0px 20px" : "")};
  padding: 20px 0px;

  ${props => (props.horizontal ? "" : "margin: 0px 8px;")}
  ${props => (props.horizontal ? "" : "align-items: center;")}

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
  margin: ${props =>
    props.horizontal ? "0px 30px 0px 0px" : "0px 0px 30px 0px"};
  height: 100%;
  border-radius: 5px;
`

export default function BlogHomePage() {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState(posts)
  const [loading, setLoading] = useState(true)
  const [isMobile, setMobile] = useState(window.innerWidth <= 576)

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 576)
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
    <Wrapper horizontal={!isMobile}>
      <TopSection horizontal={!isMobile}>
        <SectionTitle>Blog</SectionTitle>
        {loading && <BlogLoading />}
        {!loading && (
          <SearchBar
            callback={searchPosts}
            placeholder="Ex: Heroku, database"
          />
        )}
      </TopSection>
      {!loading && searchResults.length === 0 ? (
        <p style={{ padding: "20px 0px" }}>No posts found :(</p>
      ) : (
        <Posts horizontal={!isMobile} containerStyle={{ marginBottom: 50 }}>
          {searchResults.map((post, idx) => (
            <BlogPostWrapper key={idx} horizontal={!isMobile}>
              <BlogPostLink post={post} isMobile={isMobile} />
            </BlogPostWrapper>
          ))}
        </Posts>
      )}
    </Wrapper>
  )
}
