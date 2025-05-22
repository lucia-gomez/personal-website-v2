import { li, ul } from "../../style/blogStyle"

import Link from "../link"
import React from "react"
import TabbedContent from "../tabbedContent"
import styled from "styled-components"
import aboutPage from "../../contentful/about.json"
import useContentfulPreview from "../../contentful/useContentfulPreview"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

const BulletPoints = styled.ul`
  ${ul}
  ul {
    padding-left: 12px;
  }
`
const Bullet = styled.li`
  ${li}
  margin-top: 12px;

  p {
    margin-bottom: 0;
  }
`

const expRenderOptions = {
  renderNode: {
    [BLOCKS.UL_LIST]: (_, children) => <BulletPoints>{children}</BulletPoints>,
    [BLOCKS.LIST_ITEM]: (_, children) => <Bullet>{children}</Bullet>,
  },
}

const ExperienceItem = (role, company, link, date, description) => (
  <>
    <h5>
      {role}, <Link href={link}>{company}</Link>
    </h5>
    <p>{date}</p>
    {description && documentToReactComponents(description, expRenderOptions)}
  </>
)

export default function ExperienceSection() {
  const preview = useContentfulPreview()
  const content = preview ?? aboutPage

  const tabs = Object.fromEntries(
    [...content.fields.experiences]
      .reverse()
      .map(exp => [
        exp.fields.company,
        ExperienceItem(
          exp.fields.role,
          exp.fields.fullCompanyName,
          exp.fields.url,
          exp.fields.date,
          exp.fields.description
        ),
      ])
  )

  return <TabbedContent {...{ tabs }} />
}
