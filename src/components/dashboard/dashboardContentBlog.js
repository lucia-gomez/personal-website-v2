import React, { useEffect, useState } from "react"

import { DashboardCardBigNumber } from "./dashboardCard"
import DashboardCardRow from "./dashboardCardRow"
import { PostApi } from "../../scripts/api"
import Spinner from "../spinner"

export default function DashboardContentBlog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setLoading(true)
    PostApi.getAllPosts().then(res => {
      setPosts(res.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Spinner />
  }

  const getCurrentYearBlogPosts = () =>
    posts.filter(post => new Date(post.date).getFullYear() === currentYear)

  const getTotalLikes = () =>
    posts.map(post => post.likes).reduce((acc, init) => acc + init)

  return (
    <DashboardCardRow label="Blog">
      <DashboardCardBigNumber
        value={getCurrentYearBlogPosts().length}
        label={`${currentYear} blog posts`}
      />
      <DashboardCardBigNumber value={posts.length} label="Total blog posts" />
      <DashboardCardBigNumber value={getTotalLikes()} label="Total likes" />
    </DashboardCardRow>
  )
}
