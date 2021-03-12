import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CalendarPage from './pages/calendar';
import CreateEventPage from './pages/createEvent';

const USERS = [
  {
    name: "Alex",
    avatar: "",
  },
  {
    name: "Elizabeth",
    avatar: "",
  },
  {
    name: "Steve",
    avatar: "",
  },
  {
    name: "Ann",
    avatar: "",
  },
  {
    name: "Maria",
    avatar: "",
  },
  {
    name: "Bob",
    avatar: "",
  },
];

function App() {
  const isAdmin = true;

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <CalendarPage isAdmin={isAdmin} users={USERS}/>
          </Route>
          <Route exact path="/create-event">
            <CreateEventPage isAdmin={isAdmin} users={USERS} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
