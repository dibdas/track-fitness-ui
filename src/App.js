import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Login />
        <SignIn />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
