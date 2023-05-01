import { DraftApi } from "../../scripts/api"
import React from "react"
import styled from "styled-components"

const Trash = styled.i.attrs(_ => ({
  className: "fas fa-trash",
}))`
  color: ${props => props.theme.text};
  cursor: pointer;
  text-shadow: 0px 0px 14px black;
  font-size: 20px;
`

const Delete = ({ postID, callback, draft, className }) => {
  const handleDelete = () => {
    if (draft) {
      DraftApi.deleteDraft(postID)
    } else {
      DraftApi.deletePost(postID)
    }
    if (callback !== undefined) callback(postID)
  }

  const handleClick = () => {
    const result = window.confirm(
      `Are you sure you want to delete this ${draft ? "draft" : "post"}?`
    )
    if (result) {
      handleDelete()
    }
  }

  return <Trash onClick={handleClick} className={className} />
}

export default Delete
