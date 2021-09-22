/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ExerciseForm from './components/ExerciseForm';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/exercise" exact component={ExerciseForm} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
