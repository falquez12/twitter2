import logo from "./logo.svg";
import "./App.css";
import { Button,Container,Row,Col,Alert } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./login/components/Login"

function App() {
  return (
    <>
     <Router>
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
