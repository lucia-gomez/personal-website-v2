import { DraftApi, PostApi } from "../../scripts/api"

import { IconButton } from "../iconButton"
import { useHistory } from "react-router-dom"

const Delete = props => {
  const history = useHistory()
  const { postID, callback, draft, className } = props

  const handleDelete = async () => {
    if (draft) {
      await DraftApi.deleteDraft(postID)
    } else {
      await PostApi.deletePost(postID)
    }
    if (callback !== undefined) callback(postID)
    history.push({
      pathname: "/blog",
      key: Math.random(),
      state: {
        applied: true,
      },
    })
  }

  const handleClick = () => {
    const result = window.confirm(
      `Are you sure you want to delete this ${draft ? "draft" : "post"}?`
    )
    if (result) {
      handleDelete()
    }
  }

  return (
    <IconButton onClick={handleClick} className={className + " fas fa-trash"} />
  )
}

export default Delete
