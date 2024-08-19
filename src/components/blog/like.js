import React, { useState } from "react"

import { LikeApi } from "../../scripts/api"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  cursor: pointer;
`

const Heart = styled.div`
  color: ${props => props.theme.accent};
  padding-right: 4px;
  transition: color 150ms;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const Like = ({ postID, count }) => {
  const [isLiked, setLiked] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    if (postID == null) return
    if (!isLiked) {
      LikeApi.like(postID)
    } else {
      LikeApi.unlike(postID)
    }
    setLiked(!isLiked)
  }

  const getIcon = () => (isLiked ? "heart" : "heart-outline")

  return (
    <Row onClick={handleClick} data-test-id="blog-post-like">
      <Heart className={isLiked ? "animate__animated animate__heartBeat" : ""}>
        <ion-icon
          name={getIcon()}
          style={{ fontSize: 20, marginBottom: -5 }}
        ></ion-icon>
      </Heart>
      <p style={{ margin: 0 }}>{isLiked ? count + 1 : count}</p>
    </Row>
  )
}

export default Like
