import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
