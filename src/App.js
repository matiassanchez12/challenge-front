import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { AnimatePresence } from "framer-motion";
import { GetCookie } from "./components/Cookies";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [userActive, setUserActive] = useState({
    data: GetCookie("data") ? GetCookie("data") : {},
    active: GetCookie("data") ? true : false,
  });
  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Login setUser={setUserActive} />
          </Route>
          <Route path="/register" component={Register} />
          {userActive.active ? (
            <Route path="/home">
              <Home userData={userActive.data} setUser={setUserActive} />
            </Route>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
