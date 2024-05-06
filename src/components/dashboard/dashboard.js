import DashboardContentBlog from "./dashboardContentBlog"
import DashboardContentImageKit from "./dashboardContentImageKit"
import DashboardContentMailjet from "./dashboardContentMailjet"
import DashboardContentPortfolio from "./dashboardContentPortfolio"

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
