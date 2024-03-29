import AdminDashboard from "../components/dashboard/dashboard"
import { ButtonLink } from "../components/button"
import React from "react"
import SectionTitle from "../components/sectionTitle"
import styled from "styled-components"

const AdminWrapper = styled.div`
  padding: 75px 20px 50px 20px;
  text-align: left;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  button {
    margin-right: 12px;
  }
`

export default function Admin(props) {
  return (
    <AdminWrapper>
      <SectionTitle>Admin Dashboard</SectionTitle>
      <Buttons>
        <ButtonLink
          to="/admin/blog"
          sameTab={true}
          data-test-id="blog-admin-btn"
        >
          Blog Dashboard
        </ButtonLink>
        <ButtonLink
          to="/admin/email"
          sameTab={true}
          data-test-id="email-admin-btn"
        >
          Email Dashboard
        </ButtonLink>
      </Buttons>
      <AdminDashboard />
    </AdminWrapper>
  )
}
