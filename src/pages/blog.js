import React, { useCallback, useEffect, useState } from "react"

import BlogFeaturedSection from "../components/blog/blogFeaturedSection"
import BlogLoading from "../components/blog/blogLoading"
import BlogPostLink from "../components/blog/blogPostItem"
import BlogSearchBar from "../components/blog/blogSearchBar"
import { PostApi } from "../scripts/api"
import ScrollList from "../components/scrollList"
import filterPost from "../scripts/searchBlog"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const TopSection = styled.div`
  padding: 65px 8px 0px;
`

const Posts = styled(ScrollList)`
  padding: 20px 0px;
  margin: 0px 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 32px;
  overflow-x: clip;

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, 95vw);
  }
`

export default function BlogHomePage() {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState(posts)
  const [loading, setLoading] = useState(true)
  const [isSearch, toggleSearch] = useState(false)

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
      toggleSearch(false)
      setSearchResults(posts)
    } else {
      const filtered = posts.filter(post => filterPost(post, keywords))
      setSearchResults(filtered)
      toggleSearch(true)
    }
  }

  const postsToShow = useCallback(() => {
    if (isSearch) {
      return searchResults
    } else {
      return posts.slice(3)
    }
  }, [isSearch, posts, searchResults])

  return (
    <>
      <TopSection>
        {loading && <BlogLoading />}
        {posts.length > 0 && <BlogFeaturedSection posts={posts} />}
        {!loading && <BlogSearchBar searchPosts={searchPosts} />}
      </TopSection>
      {!loading && searchResults.length === 0 ? (
        <p style={{ padding: "20px 0px" }}>No posts found</p>
      ) : (
        <Posts>
          {postsToShow().map((post, idx) => (
            <BlogPostLink post={post} key={idx} />
          ))}
        </Posts>
      )}
    </>
  )
}
