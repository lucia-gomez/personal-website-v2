import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Accordion, Card } from 'react-bootstrap';

const TabCard = styled(Card)`
  background-color: ${props => props.open ? props.theme.accentLight : props.theme.medium};
  border: none;
  color: ${props => props.theme.text};
  transition: background-color 300ms;
`;

const TabCollapsible = styled(Accordion.Collapse)`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
`;

const TabbedContent = props => {
  const [openTab, setOpenTab] = useState(0);

  const clickTab = idx => {
    if (idx === openTab) {
      setOpenTab(null);
    } else {
      setOpenTab(idx);
    }
  }

  const tabs = Object.entries(props.tabs).map(([tab, content], idx) =>
    <TabCard open={idx === openTab} onClick={() => clickTab(idx)} key={idx}>
      <Accordion.Toggle as={Card.Header} eventKey={idx + ""} open={idx === openTab}>
        {tab}
      </Accordion.Toggle>
      <TabCollapsible eventKey={idx + ""}>
        <Card.Body>{content}</Card.Body>
      </TabCollapsible>
    </TabCard>
  );

  return (
    <Container>
      <Accordion defaultActiveKey="0">{tabs}</Accordion>
    </Container>
  );
}

export default TabbedContent