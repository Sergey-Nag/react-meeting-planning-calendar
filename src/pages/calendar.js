import Calendar from "../components/Calendar/Calendar";
import Controls from "../components/Controls/Controls";


function CalendarPage({ isAdmin, users }) {
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
export default CalendarPage;
