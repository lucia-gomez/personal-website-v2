import Delete from "./delete"
import React from "react"
import { a } from "../../style/blogStyle"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 200px;
  border-radius: 5px;
  background-color: ${props => props.theme.medium};
  text-align: left;
  margin: 12px 12px 10px 0px;
  position: relative;
  cursor: pointer;
`

const Title = styled.h5`
  ${a}
  display: block;
`

const Body = styled.div`
  padding: 20px;
`

const DeleteWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const BlogDraftItem = ({ post, handleOpenDraft, handleDeleteDraft }) => {
  return (
    <Wrapper
      onClick={() => handleOpenDraft(post)}
      data-test-id="blog-draft-item"
    >
      <Body>
        <Title>{post.title}</Title>
        <p>{post.summary}</p>
      </Body>
      <DeleteWrapper data-test-id="blog-draft-item-delete">
        <Delete postID={post._id} callback={handleDeleteDraft} draft={true} />
      </DeleteWrapper>
    </Wrapper>
  )
}

export default BlogDraftItem
