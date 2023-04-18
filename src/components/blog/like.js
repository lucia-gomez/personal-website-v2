import React, { useState } from "react"

import Axios from "axios"
import { getApiUrl } from "../../scripts/util"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  font-size: 18px;
`

const Heart = styled.i`
  color: ${props => props.theme.accent};
  padding-right: 3px;
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const Like = ({ postID, count }) => {
  const [isLiked, setLiked] = useState(false)

  const handleClick = () => {
    if (postID == null) return
    if (!isLiked) {
      Axios.post(getApiUrl() + "/api/like", { id: postID })
    } else {
      Axios.post(getApiUrl() + "/api/unlike", { id: postID })
    }
    setLiked(!isLiked)
  }

  return (
    <Row onClick={handleClick}>
      <Heart
        className={
          isLiked
            ? "fas fa-heart animate__animated animate__heartBeat"
            : "far fa-heart"
        }
      />
      <p style={{ margin: 0 }}>{isLiked ? count + 1 : count}</p>
    </Row>
  )
}

export default Like
