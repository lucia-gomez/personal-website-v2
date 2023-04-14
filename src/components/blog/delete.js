import React from "react"
import styled from "styled-components"
import Axios from "axios"
import { getApiUrl } from "../../scripts/util"

const Trash = styled.i.attrs(_ => ({
  className: "fas fa-trash",
}))`
  color: ${props => props.theme.text};
  cursor: pointer;
  text-shadow: 0px 0px 14px black;
  font-size: 20px;
  transition: transform 150ms;

  :hover {
    transform: scale(1.1);
  }
`

const Delete = ({ postID, callback, draft, className }) => {
  const handleClick = () => {
    Axios.delete(`${getApiUrl()}/api/${draft ? "draft" : "delete"}/${postID}`)
    if (callback !== undefined) callback(postID)
  }

  return <Trash onClick={handleClick} className={className} />
}

export default Delete
