import { Container, Row, Col } from 'react-bootstrap';
import Calendar from './components/Calendar/Calendar';
import Controls from './components/Controls/Controls';

const USERS = [
  {
    name: 'Alex',
    avatar: '',
  },
  {
    name: 'Elizabeth',
    avatar: '',
  },
  {
    name: 'Steve',
    avatar: '',
  },
  {
    name: 'Ann',
    avatar: '',
  },
  {
    name: 'Maria',
    avatar: '',
  },
  {
    name: 'Bob',
    avatar: '',
  },
];

function App() {
  const isAdmin = true;

  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1>Calendar</h1>
        </Col>
        <Col className="pt-1">
          <Controls isAdmin={isAdmin} users={USERS} />
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

export default App;
