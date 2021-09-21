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
        <Route path="/login">
          <Login />
          <ExeciseForm />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Router>
    </>
  );
}

export default App;
