import Delete from "./delete"
import Like from "./like"
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.medium};
  height: 10px;
  margin-bottom: 8px;

  p {
    margin: 0;
    margin-left: 4px;
    font-size: 0.8rem;
  }

  i {
    font-size: 0.8rem;
  }

  .delete {
    margin-left: 16px;
  }
`

export default function BlogPostItemMetadata({ post, className }) {
  const { isAuthenticated } = useAuth0()
  const date = post.dateString

  return (
    <Wrapper className={className}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ion-icon
          name="today"
          style={{ fontSize: 14, marginTop: -1 }}
        ></ion-icon>
        <p style={{ marginRight: "12px" }}>
          {date.substring(0, date.indexOf(","))}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Like count={post.likes} postID={post._id} />
        {isAuthenticated ? <Delete postID={post._id} /> : null}
      </div>
    </Wrapper>
  )
}
