import { DashboardCardBigNumber } from "./dashboardCard"
import DashboardCardRow from "./dashboardCardRow"
import projects from "../../scripts/projectList"
import { useState } from "react"

export default function DashboardContentPortfolio() {
  const [currentYear] = useState(new Date().getFullYear())

  const getCurrentYearProjects = () =>
    projects.filter(project => project.date.includes(currentYear))

  return (
    <DashboardCardRow label="Projects">
      <DashboardCardBigNumber
        value={getCurrentYearProjects().length}
        label={`${currentYear} projects`}
      />
      <DashboardCardBigNumber value={projects.length} label="Total projects" />
    </DashboardCardRow>
  )
}
