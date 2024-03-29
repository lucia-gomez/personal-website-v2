import React, { useEffect, useState } from "react"

import BlogDraftItem from "../components/blog/blogDraftItem"
import { DraftApi } from "../scripts/api"
import Editor from "../components/editor/editor"
import styled from "styled-components"

const AdminWrapper = styled.div`
  padding: 75px 20px 50px 20px;
  text-align: left;
`

const AdminEditor = styled(Editor)`
  max-height: 80vh;

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

export default function AdminBlog() {
  const [drafts, setDrafts] = useState([])
  const [openDraft, setOpenDraft] = useState()

  useEffect(() => {
    DraftApi.getDrafts().then(res => {
      setDrafts(res.data.reverse())
    })
  }, [openDraft])

  const handleOpenDraft = post => {
    setOpenDraft(post)
    window.scrollTo(0, 0)
  }

  const handleDeleteDraft = id => {
    setOpenDraft()
    setDrafts(drafts.filter(draft => draft._id !== id))
  }

  return (
    <AdminWrapper>
      <AdminEditor
        post={openDraft}
        isDraft={openDraft != null}
        isNew={true}
        actions={{ setOpenDraft, setDrafts }}
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
    </AdminWrapper>
  )
}
