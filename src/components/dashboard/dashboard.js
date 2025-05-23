import DashboardContentBlog from "./dashboardContentBlog"
import DashboardContentMailjet from "./dashboardContentMailjet"

export default function AdminDashboard() {
  return (
    <>
      <DashboardContentBlog />
      <DashboardContentMailjet />
    </>
  )
}
