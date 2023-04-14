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

const BlogSearchBar = styled(SearchBar)`
  @media screen and (max-width: 576px) {
    width: fit-content;
    margin: auto;
  }
`

const Posts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (max-width: 576px) {
    max-width: 80vw;
    margin: auto;
    margin-top: 30px;
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
      <div style={{ padding: "75px 20px 50px 20px" }}>
        {SectionTitle("Blog")}
        {loading && <BlogLoading />}
        {!loading && searchResults.length === 0 && (
          <p style={{ padding: "20px 0px" }}>No posts found :(</p>
        )}
        {!loading && (
          <>
            <BlogSearchBar
              callback={searchPosts}
              placeholder="Ex: Heroku, database"
            />
            <Posts>
              {searchResults.map((post, idx) => (
                <BlogPostLink post={post} key={idx} />
              ))}
              {/* {searchAnimation((style, post) => (
                <animated.div style={style}>
                  <BlogPostLink post={post} />
                </animated.div>
              ))} */}
            </Posts>
          </>
        )}
      </div>
    </Layout>
  )
}
