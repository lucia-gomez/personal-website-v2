import React, { useEffect, useState } from "react"

import BlogDraftItem from "../components/blog/blogDraftItem"
import Editor from "../components/editor/editor"
import SectionTitle from "../components/sectionTitle"
import { getDrafts } from "../scripts/api"
import styled from "styled-components"

const BlogWrapper = styled.div`
  padding: 75px 20px 50px 20px;
  text-align: left;
`

const AdminEditor = styled(Editor)`
  max-height: 70vh;

  .rc-md-editor.full {
    margin-top: 60px;
  }
`

const DraftSection = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid ${props => props.theme.text};
`

const Drafts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default function BlogAdmin() {
  const [drafts, setDrafts] = useState([])
  const [openDraft, setOpenDraft] = useState()

  useEffect(() => {
    getDrafts().then(res => {
      setDrafts(res.data.reverse())
    })
  }, [openDraft])

  const handleOpenDraft = post => {
    setOpenDraft(post)
    window.scrollTo(0, 0)
  }

  const handleDeleteDraft = id => {
    setDrafts(drafts.filter(draft => draft.id !== id))
  }

  return (
    <BlogWrapper>
      <SectionTitle>Blog Admin</SectionTitle>
      <AdminEditor
        post={openDraft}
        isDraft={openDraft != null}
        isNew={true}
        actions={{ setOpenDraft: setOpenDraft }}
      />
      {drafts.length === 0 ? null : (
        <DraftSection>
          <h3>Drafts</h3>
          <Drafts>
            {drafts.map((draft, idx) => (
              <BlogDraftItem
                post={draft}
                handleOpenDraft={handleOpenDraft}
                handleDeleteDraft={handleDeleteDraft}
                key={idx}
              />
            ))}
          </Drafts>
        </DraftSection>
      )}
    </BlogWrapper>
  )
}
