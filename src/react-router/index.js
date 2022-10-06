import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Home from "./Home";
import About from "./About";
import People from "./People";
import Person from "./Person";
import Error from "./Error";
import Navbar from "./Navbar";

const Setup = () => {
  return (
    <>
      <h1>React Router</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/people'>
            <People />
          </Route>
          <Route path='/person/:id'>
            <Person />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Setup;
