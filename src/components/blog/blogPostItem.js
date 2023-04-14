import React, { useRef } from "react"
import styled from "styled-components"
import Delete from "./delete"
import Like from "./like"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import { hexToRGB } from "../../style/theme"

const Wrapper = styled.div`
  height: 60vh;
  width: 350px;
  border-radius: 5px;
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  text-align: left;
  margin: 0px 30px 30px 0px;
  position: relative;
  display: grid;
  min-height: 0;
  grid-template-rows: 1fr 30px;

  :last-child {
    margin-right: 0px;
  }

  a {
    color: ${props => props.theme.text};
  }

  a:hover {
    color: ${props => props.theme.text};
    text-decoration: none;
  }

  @media screen and (max-width: 576px) {
    max-width: 80vw;
  }
`

const ClickableCard = styled(Link)`
  grid-template-rows: 150px 1fr;
  display: grid;
  min-height: 0;
`

const Image = styled.div`
  background-image: url(${props => props.image});
  width: 350px;
  border-radius: 5px 5px 0px 0px;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(1);
  mix-blend-mode: hard-light;

  @media screen and (max-width: 576px) {
    max-width: 80vw;
  }
`

const Body = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 0;
`

const Date = styled.p`
  font-size: 12px;
`

const Title = styled.h5`
  color: ${props => props.theme.accent};
  width: fit-content;

  :hover {
    color: ${props => props.theme.accentHover};
  }
`

const Footer = styled.div`
  width: 100%;
  border-top: 1px solid ${props => hexToRGB(props.theme.text, 0.1)};
  padding: 10px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${props => hexToRGB(props.theme.text, 0.3)};

  p {
    margin: 0;
  }
`

const DeleteWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`

const ContentPreview = styled.p`
  overflow: hidden;
  color: ${props => hexToRGB(props.theme.text, 0.5)};
  max-height: 40vh;
  height: 100%;
  column-width: 200px;
`

const BlogPostLink = ({ post }) => {
  const { isAuthenticated } = useAuth0()
  const previewDiv = useRef()
  const date = post.dateString

  const previewText = () => {
    const tempDiv = document.createElement("div")
    tempDiv.innerHTML = post.content
    return tempDiv.innerText || tempDiv.textContent || ""
  }

  const tempImageUrl =
    "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"

  return (
    <Wrapper>
      <ClickableCard to={`/blog/${post.slug}/`}>
        <Image image={post.imageUrl ?? tempImageUrl} />
        <Body>
          <div>
            <Title>{post.title}</Title>
            <p>{post.summary}</p>
          </div>
          <ContentPreview ref={previewDiv}>{previewText()}</ContentPreview>
        </Body>
      </ClickableCard>
      <Footer>
        <Like count={post.likes} postID={post.id} />
        <Date>{date.substring(0, date.indexOf(","))}</Date>
      </Footer>
      {isAuthenticated ? (
        <DeleteWrapper>
          <Delete postID={post.id} />
        </DeleteWrapper>
      ) : null}
    </Wrapper>
  )
}

export default BlogPostLink
