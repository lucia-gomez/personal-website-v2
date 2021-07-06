import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

const TabColumn = styled(Nav)`
  position: relative;
`;

const TabActive = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${props => props.theme.accent};
  width: 5px;
  height: 40px;
  z-index: 1;
  transform: translateY(${props => props.position * 40}px);
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;

const TabLink = styled(Nav.Link)` 
  border-left: 5px solid ${props => props.theme.accentLight};
  border-radius: 0px;
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
`;

const TabbedContent = props => {
  const [position, setPosition] = useState(0);

  const tabs = Object.keys(props.tabs).map((tab, idx) =>
    <TabLink eventKey={idx} key={idx}
      onClick={() => setPosition(idx)}>{tab}</TabLink>
  );

  const contents = Object.values(props.tabs).map((content, idx) =>
    <Tab.Pane eventKey={idx} key={idx}>
      {content}
    </Tab.Pane>
  );

  const desktop = (
    <Container className="d-none d-md-block">
      <Tab.Container defaultActiveKey={0}>
        <Row className="justify-content-center">
          <Col sm={3}>
            <TabActive {...{ position }} />
            <TabColumn className="flex-column">
              {tabs}
            </TabColumn>
          </Col>
          <Col sm={7}>
            <Tab.Content>
              {contents}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );

  const mobile = (
    <Container className="d-md-none">
      <Tab.Container defaultActiveKey={0}>
        <Nav variant="tabs">
          {tabs}
        </Nav>
        <Tab.Content>
          {contents}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );

  return (
    <>
      {desktop}
      {mobile}
    </>
  );
}

export default TabbedContent