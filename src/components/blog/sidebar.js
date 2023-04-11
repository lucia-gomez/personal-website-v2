import styled from "styled-components"
import Like from "./like"
import ProfileImage from "../../assets/images/profile-circle.png"
import Back from "./back"

const Wrapper = styled.div`
  background-color: ${props => props.theme.bg};
  border-radius: 5px;
  height: 310px;
  position: sticky;
  top: 60px;
  align-self: start;
  text-align: left;

  @media only screen and (max-width: 768px) {
    height: 290px;
    padding-top: 10px;
    position: relative;
    top: 0px;
    width: 95%;
    margin: auto;
  }
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfilePic = styled.img`
  border-radius: 300px;
  height: 150px;
  width: 150px;
  mix-blend-mode: luminosity;
  margin-bottom: 10px;
`

const Divider = styled.div`
  height: 1px;
  width: 90%;
  border-radius: 5px;
  background-color: ${props => props.theme.text};
  margin-bottom: 1rem;
  opacity: 20%;
`

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Name = styled.h5`
  color: ${props => props.theme.text};
  font-weight: 900;
  margin: 0px;
`

const ShareRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: fit-content;
  cursor: pointer;
`

const Share = styled.i`
  color: ${props => props.theme.accent};
  padding-right: 3px;
`

const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  span {
    width: 140px;
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.bg};
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;

    ::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: ${props => props.theme.accent} transparent transparent
        transparent;
    }
  }
`

const BackWrapper = styled(Back)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

function copyToClipboard() {
  const url = window.location.href
  navigator.clipboard.writeText(url)

  const tooltip = document.getElementById("tooltip")
  tooltip.style.opacity = 1
  setTimeout(() => {
    tooltip.style.opacity = 0
  }, 1500)
}

const Sidebar = ({ post, className }) => {
  return (
    <Wrapper className={className}>
      <BackWrapper link="/blog" />
      <SidebarContent>
        <ProfilePic src={ProfileImage} alt="profile picture" />
        <Name>Lucia Gomez</Name>
        <p>Full-stack developer</p>
        <Divider />
      </SidebarContent>
      <Row>
        <Like count={post.likes} postID={post.id} />
        <Tooltip>
          <ShareRow onClick={copyToClipboard}>
            <Share className="fas fa-link" />
            Share
          </ShareRow>
          <span id="tooltip">Link copied to clipboard</span>
        </Tooltip>
      </Row>
    </Wrapper>
  )
}

export default Sidebar
