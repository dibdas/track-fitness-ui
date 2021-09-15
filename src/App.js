import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <SignIn />
        <Login />
        <Home />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
