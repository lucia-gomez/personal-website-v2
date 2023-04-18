import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Tab, Row, Col, Nav, Container } from "react-bootstrap"
import { hexToRGB } from "../style/theme"

const TAB_MOBILE_WIDTH = 150
const TAB_BORDER_THICKNESS = 4

const CustomContainer = styled(Container)`
  padding: 0px;
  @media screen and (min-width: 850px) {
    margin: 0px;
    width: 65vw;
  }
`

const TabColumn = styled(Nav)`
  position: relative;
`

const TabPanel = styled(Tab.Pane)`
  text-align: left;
`

const TabActiveDesktop = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${props => props.theme.accent};
  width: ${TAB_BORDER_THICKNESS}px;
  height: 40px;
  z-index: 1;
  transform: translateY(${props => props.position * 40}px);
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
`

const TabActiveMobile = styled.div`
  position: absolute;
  top: 40px;
  background-color: ${props => props.theme.accent};
  width: ${TAB_MOBILE_WIDTH}px;
  height: ${TAB_BORDER_THICKNESS}px;
  z-index: 1;
  transform: translateX(${props => props.position * TAB_MOBILE_WIDTH}px);
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
`

const TabLink = styled(Nav.Link)`
  min-width: ${TAB_MOBILE_WIDTH}px;
  border-radius: 0px;
  border-left: ${TAB_BORDER_THICKNESS}px solid
    ${props => props.theme.accentLight};
  color: ${props => props.theme.text};
  text-align: left;
  transition: background-color 300ms, color 300ms;

  :hover {
    background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
    color: ${props => props.theme.text};
  }

  &.nav-link.active {
    color: ${props => props.theme.accent};
    background-color: ${props => hexToRGB(props.theme.medium, 0.5)};
  }
`

const MobileNav = styled(Nav)`
  border: none;
  margin-bottom: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;

  .nav-link {
    border: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .nav-link,
  .nav-link.active {
    border-bottom: ${TAB_BORDER_THICKNESS}px solid
      ${props => props.theme.accentLight};
    display: flex;
    justify-content: center;
  }

  .nav-link:hover {
    border-color: ${props => props.theme.accentLight};
  }
`

const TabbedContent = props => {
  const { horizontal = false } = props
  const [position, setPosition] = useState(0)
  const horizontalTabs = useRef()

  const onClickTab = idx => {
    setPosition(idx)
    horizontalTabs?.current.scrollTo({
      left: TAB_MOBILE_WIDTH * (idx - 0.5),
      behavior: "smooth",
    })
  }

  const tabs = Object.keys(props.tabs).map((tab, idx) => (
    <TabLink eventKey={idx} key={idx} onClick={() => onClickTab(idx)}>
      {tab}
    </TabLink>
  ))

  const contents = Object.values(props.tabs).map((content, idx) => (
    <TabPanel eventKey={idx} key={idx}>
      {content}
    </TabPanel>
  ))

  const desktop = (
    <Container className={horizontal ? "d-none" : "d-none d-md-block"}>
      <Tab.Container defaultActiveKey={0}>
        <Row>
          <Col sm={3}>
            <TabActiveDesktop {...{ position }} />
            <TabColumn className="flex-column">{tabs}</TabColumn>
          </Col>
          <Col sm={9}>
            <Tab.Content>{contents}</Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )

  // mobile but also horizontal layout
  const mobile = (
    <CustomContainer className={horizontal ? "d-md-block" : "d-md-none"}>
      <Tab.Container defaultActiveKey={0}>
        <MobileNav variant="tabs flex-nowrap" ref={horizontalTabs}>
          <TabActiveMobile {...{ position }} />
          {tabs}
        </MobileNav>
        <Tab.Content>{contents}</Tab.Content>
      </Tab.Container>
    </CustomContainer>
  )

  return (
    <div style={{ paddingTop: "20px" }}>
      {desktop}
      {mobile}
    </div>
  )
}

export default TabbedContent
