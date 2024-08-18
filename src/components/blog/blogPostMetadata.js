import { FaCalendarDay } from "react-icons/fa"
import Like from "./like"
import Link from "../link"
import ProfilePic from "../about/profilePic"
import Skeleton from "react-loading-skeleton"
import { hexToRGB } from "../../style/theme"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 20px 0px;

  p,
  svg {
    margin: 0;
    font-size: 16px;
    color: ${props => hexToRGB(props.theme.text, 0.75)};
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
      {post ? (
        <ProfilePicBlog />
      ) : (
        <div>
          <Skeleton circle={true} width="50px" height="50px" />
        </div>
      )}
      {post ? (
        <>
          <div>
            <p>Lucia Gomez</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCalendarDay size="14px" />
              <p style={{ marginLeft: "4px" }}>
                {post.dateString.substring(0, post.dateString.indexOf(","))}
              </p>
            </div>
          </div>
          <Dot />
          <Like count={post != null ? post.likes : "--"} postID={post?._id} />
          <Dot />
          <Link
            to="/subscribe"
            sameTab={true}
            data-test-id="blog-post-subscribe"
          >
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <i className="fas fa-envelope" style={{ paddingRight: "5px" }} />
              Subscribe
            </div>
          </Link>
        </>
      ) : (
        <div style={{ flex: 1, marginLeft: 20 }}>
          <Skeleton width="50%" count={2} />
        </div>
      )}
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
