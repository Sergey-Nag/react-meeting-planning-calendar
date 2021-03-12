import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Controls from "./components/Controls/Controls";
import Calendar from "./components/Calendar/Calendar";
import Form from "./components/Form/Form";
import { AuthorizeAlert } from "./components/Alerts/AuthorizeAlert";
import AuthContext from './contexts/authContext';
import { useState } from "react";

const USERS = [
  {
    name: "Alex",
    avatar: "",
    isAdmin: true,
  },
  {
    name: "Elizabeth",
    avatar: "",
    isAdmin: true,
  },
  {
    name: "Steve",
    avatar: "",
    isAdmin: false,
  },
  {
    name: "Ann",
    avatar: "",
    isAdmin: false,
  },
  {
    name: "Maria",
    avatar: "",
    isAdmin: false,
  },
  {
    name: "Bob",
    avatar: "",
    isAdmin: false,
  },
];


function App() {
  const [isAdmin, setAdmin] = useState();

  return (
    <Router>
      <AuthContext.Provider value={[isAdmin, setAdmin]}>
        { isAdmin === undefined && <AuthorizeAlert users={USERS} /> }
      </AuthContext.Provider>
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
                <Route exact path="/">
                  <Calendar isAdmin={isAdmin} users={USERS} />
                </Route>
                <Route exact path="/create-event">
                  <Form />
                </Route>
              </Col>
            </Row>
          </Container>
    </Router>
  );
}

export default App;
