import { Row, Col, Button } from 'react-bootstrap';
import Dropdown from '../Dropdown/Dropdown';

export default function Controls(args) {

  return (
    <Row>
      <Col>
        <Dropdown users={args.users} />
      </Col>
      { args.isAdmin && (
        <Col>
          <Button variant="outline-primary" className="w-100">
            Create event
          </Button>
        </Col>
      )}
    </Row>
  );
}
