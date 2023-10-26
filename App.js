import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import home from './home';
import about from'./about';
import contact from'./contact';
function App(){
  return(
    <Router>
      <div>
        <nav>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </nav>
        <Switch>
          <Router path="/" exact component={home} />
          <Router path="/about" exact component={about} />
          <Router path="/contact" exact component={contact} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;