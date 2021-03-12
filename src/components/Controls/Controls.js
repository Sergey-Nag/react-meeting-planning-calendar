import { Switch, Link, Route } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Dropdown from "../Dropdown/Dropdown";

export default function Controls(args) {
  return (
    <Row>
      <Switch>
        <Route exact path="/">
          <Col>
            <Dropdown users={args.users} />
          </Col>
          {args.isAdmin && (
            <Col>
              <Link
                to="/create-event"
                className="w-100 btn btn-outline-primary"
              >
                Create event
              </Link>
            </Col>
          )}
        </Route>
        <Route exact path="/create-event">
          <Col>
            <Link to="/" className="w-100 btn btn-outline-primary">
              Back
            </Link>
          </Col>
        </Route>
      </Switch>
    </Row>
  );
}
