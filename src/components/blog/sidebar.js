import Like from "./like"
import Link from "../link"
import { gradientWithoutBg } from "../layout/gradient"
import { hexToRGB } from "../../style/theme"
import { profilePicUrl } from "../../scripts/util"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: ${props => hexToRGB(props.theme.medium, 0.2)};
  border-radius: 5px;
  height: 310px;
  top: 60px;
  position: sticky;
  align-self: start;
  text-align: left;
  margin: 0px 20px;

  @media only screen and (max-width: 768px) {
    background-color: ${props => hexToRGB(props.theme.medium, 0.4)};
    height: 300px;
    position: relative;
    top: 0px;
    width: 95%;
    margin: 20px auto;
  }
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfilePicWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 300px;
  ::before {
    border-radius: 300px;
  }
  margin: 20px;
  ${gradientWithoutBg}
`

const ProfilePic = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  filter: grayscale(1);
  mix-blend-mode: darken;
  margin-bottom: 10px;
  border-radius: 160px;
`

const Divider = styled.div`
  height: 1px;
  width: 90%;
  border-radius: 5px;
  background-color: ${props => props.theme.text};
  margin-bottom: 12px;
  opacity: 20%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Name = styled.h5`
  color: ${props => props.theme.text};
  margin: 0px;
`

const ShareRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: fit-content;
  cursor: pointer;
  font-size: 18px;
`

const SubscribeIcon = styled.i`
  padding-right: 4px;
`

const Sidebar = ({ post, className }) => {
  return (
    <Wrapper className={className}>
      <SidebarContent>
        <ProfilePicWrapper>
          <ProfilePic src={profilePicUrl} alt="profile picture" />
        </ProfilePicWrapper>
        <Name>Lucia Gomez</Name>
        <p style={{ marginBottom: 12 }}>Creative Technologist</p>
        <Divider />
      </SidebarContent>
      <Row>
        <Like count={post != null ? post.likes : "--"} postID={post?._id} />
        <ShareRow>
          <Link to="/subscribe" sameTab={true}>
            <SubscribeIcon className="fas fa-envelope" />
            Subscribe
          </Link>
        </ShareRow>
      </Row>
    </Wrapper>
  )
}

export default Sidebar
