import React from 'react';
import styled from 'styled-components';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';

const TabLink = styled(Nav.Link)`
  color: ${props => props.theme.accent};
  text-align: left;

  :hover {
    color: ${props => props.theme.accentHover};
  }

  &.nav-link.active {
    color: ${props => props.theme.header};
    background-color: ${props => props.theme.accentLight};
    border-left: 5px solid ${props => props.theme.accent};
  }
`;

const TabbedContent = props => {
  const tabs = Object.keys(props.tabs).map((tab, idx) =>
    <Nav.Item key={idx}>
      <TabLink eventKey={idx}>{tab}</TabLink>
    </Nav.Item>
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
            <Nav variant="pills" className="flex-column">
              {tabs}
            </Nav>
          </Col>
          <Col sm={6}>
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