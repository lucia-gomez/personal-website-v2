import Like from "./like"
import Link from "../link"
import ProfilePic from "../about/profilePic"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 20px 0px;

  p {
    margin: 0;
    color: ${props => props.theme.medium};
  }
`

const ProfilePicBlog = styled(ProfilePic)`
  height: 50px;
  width: 50px;
  margin-right: 12px;
`

const Dot = styled.div`
  ::before {
    content: "";
    color: ${props => props.theme.medium};
    margin: 8px;
  }
`

export function BlogPostMetadata({ post }) {
  return (
    <Row>
      <ProfilePicBlog />
      <div>
        <p>Lucia Gomez</p>
        <p>{post.dateString.substring(0, post.dateString.indexOf(","))}</p>
      </div>
      <Dot />
      <Like count={post != null ? post.likes : "--"} postID={post?._id} />
      <Dot />
      <Link to="/subscribe" sameTab={true}>
        <i className="fas fa-envelope" style={{ padding: "5px" }} />
        Subscribe
      </Link>
    </Row>
  )
}

const Wrapper = styled.div`
  margin-bottom: 30px;
`

const Divider = styled.div`
  height: 1px;
  width: 90%;
  border-radius: 5px;
  background-color: ${props => props.theme.medium};
  margin: 24px 0px;
  opacity: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export function BlogPostMetadataLarge({ post }) {
  return (
    <Wrapper>
      <Divider />
      <BlogPostMetadata post={post} />
      <Divider />
    </Wrapper>
  )
}
