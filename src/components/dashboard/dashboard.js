import DashboardContentBlog from "./dashboardContentBlog"
// import DashboardContentImageKit from "./dashboardContentImageKit"
import DashboardContentMailjet from "./dashboardContentMailjet"
import DashboardContentPortfolio from "./dashboardContentPortfolio"
import React from "react"

export default function AdminDashboard() {
  return (
    <>
      <DashboardContentBlog />
      <DashboardContentPortfolio />
      {/* <DashboardContentImageKit /> */}
      <DashboardContentMailjet />
    </>
  )
}
