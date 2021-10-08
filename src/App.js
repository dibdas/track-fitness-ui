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
import Pogress from './components/Pogress';
import SignUp from './components/SignUp';
import Measurements from './containers/MeasurementContainer';

function App() {
  return (
    <>
      <Router>
        <Home />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/exercise" exact>
            <Measurements exercises={['leftBiceps', 'rightBiceps', 'Hip', 'waist', 'leftThigh', 'rightThigh']} />
          </Route>
          <Route path="/pogress" exact component={Pogress} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
