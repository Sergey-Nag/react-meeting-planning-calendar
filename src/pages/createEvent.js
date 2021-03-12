import Calendar from "../components/Calendar/Calendar";
import Controls from "../components/Controls/Controls";

import { Container, Row, Col } from "react-bootstrap";

export default function CreateEventPage({ isAdmin, users }) {
  document.title = 'Create page';
  
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1>{document.title}</h1>
        </Col>
        <Col className="pt-1">
          <Controls isAdmin={isAdmin} users={users} />
        </Col>
      </Row>
      <Row className="pt-2">
        <Col>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
}
