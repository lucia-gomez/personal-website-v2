import React, { useState } from "react"
import styled from "styled-components"
import { Tab, Row, Col, Nav, Container } from "react-bootstrap"

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
  width: 5px;
  height: 40px;
  z-index: 1;
  transform: translateY(${props => props.position * 40}px);
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
`

const TabActiveMobile = styled.div`
  position: absolute;
  top: 40px;
  background-color: ${props => props.theme.accent};
  width: 150px;
  height: 5px;
  z-index: 1;
  transform: translateX(${props => props.position * 150}px);
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
`

const TabLink = styled(Nav.Link)`
  min-width: 150px;
  border-radius: 0px;
  border-left: 5px solid ${props => props.theme.accentLight};
  color: ${props => props.theme.text};
  text-align: left;
  transition: background-color 300ms, color 300ms;

  :hover {
    background-color: ${props => props.theme.medium};
    color: ${props => props.theme.header};
  }

  &.nav-link.active {
    color: ${props => props.theme.accent};
    background-color: ${props => props.theme.medium};
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

  @media only screen and (max-width: 768px) {
    .nav-link,
    .nav-link.active {
      border-bottom: 5px solid ${props => props.theme.accentLight};
      display: flex;
      justify-content: center;
    }
  }
`

const TabbedContent = props => {
  const [position, setPosition] = useState(0)

  const tabs = Object.keys(props.tabs).map((tab, idx) => (
    <TabLink eventKey={idx} key={idx} onClick={() => setPosition(idx)}>
      {tab}
    </TabLink>
  ))

  const contents = Object.values(props.tabs).map((content, idx) => (
    <TabPanel eventKey={idx} key={idx}>
      {content}
    </TabPanel>
  ))

  const desktop = (
    <Container className="d-none d-md-block">
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

  const mobile = (
    <Container className="d-md-none">
      <Tab.Container defaultActiveKey={0}>
        <MobileNav variant="tabs flex-nowrap">
          <TabActiveMobile {...{ position }} />
          {tabs}
        </MobileNav>
        <Tab.Content>{contents}</Tab.Content>
      </Tab.Container>
    </Container>
  )

  return (
    <div style={{ paddingTop: "20px" }}>
      {desktop}
      {mobile}
    </div>
  )
}

export default TabbedContent
