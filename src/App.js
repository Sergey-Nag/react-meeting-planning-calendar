import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from './components/Calendar';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container className="p-5">
      <Row>
        <Col>
          <h1>Calendar</h1>
        </Col>
        <Col></Col>
      </Row>
      <Row className="pt-2">
        <Col>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
