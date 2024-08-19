import { DraftApi, PostApi } from "../../scripts/api"

import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Icon = styled.div`
  color: ${props => props.theme.accent};
  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const Delete = props => {
  const navigate = useNavigate()
  const { postID, callback, draft, className } = props

  const handleDelete = async () => {
    if (draft) {
      await DraftApi.deleteDraft(postID)
    } else {
      await PostApi.deletePost(postID)
    }
    if (callback !== undefined) callback(postID)
    navigate({
      pathname: draft ? "/admin/blog" : "/blog",
      key: Math.random(),
      state: {
        applied: true,
      },
    })
  }

  const handleClick = e => {
    e.preventDefault()
    const result = window.confirm(
      `Are you sure you want to delete this ${draft ? "draft" : "post"}?`
    )
    if (result) {
      handleDelete()
    }
  }

  return (
    <Icon
      onClick={handleClick}
      className={className}
      data-test-id="blog-post-delete-btn"
    >
      <ion-icon
        name="trash"
        style={{ fontSize: 20, marginBottom: -4, paddingLeft: 8 }}
      ></ion-icon>
    </Icon>
  )
}

export default Delete
