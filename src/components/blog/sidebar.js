import styled from "styled-components";
import { Link } from 'react-router-dom';
import Like from './like';
import ProfileImage from "../../assets/images/profile-circle.png";

const Wrapper = styled.div`
  background-color: ${props => props.theme.bg};
  border-radius: 5px;
  height: 310px;
  position: sticky;
  top: 60px;
  align-self: start;
  text-align: left;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const BackButton = styled(Link)`
  color: ${props => props.theme.accent};
  margin: 5px;
  display: block;

  :hover {
    color: ${props => props.theme.accentHover};
    text-decoration: none;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePic = styled.img`
  border-radius: 300px;
  height: 150px;
  width: 150px;
  mix-blend-mode: luminosity;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  width: 90%;
  border-radius: 5px;
  background-color: ${props => props.theme.text};
  margin-bottom: 1rem;
  opacity: 20%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Name = styled.h5`
  color: ${props => props.theme.header};
  font-weight: 900;
  margin: 0px;
`;

const ShareRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: fit-content;
  cursor: pointer;
`;

const Share = styled.i`
  color: ${props => props.theme.accent};
  padding-right: 3px;
`;

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
      border-color: ${props => props.theme.accent} transparent transparent transparent;
    }
  }
`;

function copyToClipboard() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);

  const tooltip = document.getElementById("tooltip");
  tooltip.style.opacity = 1;
  setTimeout(() => {
    tooltip.style.opacity = 0;
  }, 1500);
}

const Sidebar = ({ post }) => {
  return (
    <Wrapper>
      <BackButton to="/blog">
        <i className="fas fa-chevron-left" style={{ paddingRight: '3px' }} />
        Back
      </BackButton>
      <SidebarContent>
        <ProfilePic
          src={ProfileImage}
          alt="profile picture"
        />
        <Name>Lucia Gomez</Name>
        <p>Full-stack developer</p>
        <Divider />
      </SidebarContent>
      <Row>
        <Like count={post.likes} postID={post.id} />
        <Tooltip>
          <ShareRow onClick={copyToClipboard}>
            <Share className='fas fa-link' />
            Share
          </ShareRow>
          <span id="tooltip">Link copied to clipboard</span>
        </Tooltip>
      </Row>
    </Wrapper>
  );
}

export default Sidebar