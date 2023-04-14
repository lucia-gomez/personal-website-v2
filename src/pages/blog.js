import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SectionTitle from "../components/sectionTitle"
import BlogPostLink from "../components/blog/blogPostItem"
import Axios from "axios"
import { getApiUrl } from "../scripts/util"
import { Spinner } from "react-bootstrap"
import SearchBar from "../components/searchBar"
import { useTransition, animated } from "@react-spring/web"
import filterPost from "../scripts/searchBlog"

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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

  const trans = useTransition(searchResults, {
    from: { opacity: 0 },
    enter: { opacity: 1, maxHeight: 400 },
    leave: { opacity: 0, maxHeight: 0 },
  })

  const content =
    posts.length === 0 ? (
      <p>No posts found</p>
    ) : (
      <Posts>
        {trans((style, post) => (
          <animated.div style={style}>
            <BlogPostLink post={post} />
          </animated.div>
        ))}
      </Posts>
    )

  return (
    <Layout>
      <div style={{ padding: "75px 20px 50px 20px" }}>
        {SectionTitle("Blog")}
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <>
            <SearchBar
              callback={searchPosts}
              placeholder="Ex: Heroku, database"
            />
            {content}
          </>
        )}
      </div>
    </Layout>
  )
}
