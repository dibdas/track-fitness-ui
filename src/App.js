/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ExeciseForm from './components/ExerciseForm';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/login/exercise" exact component={ExeciseForm} />
        </Switch>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signup/exercise" exact component={ExeciseForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
