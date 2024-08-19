import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from 'components/Home/Home';
import FamousJokes from 'components/Jokes/FamousJokes';

function App() {

  return (
    <>
    
        <nav>
          <Link to="/">Home </Link>
          <Link to="/famous-jokes"> Gestion de blagues</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/famous-jokes" element={<FamousJokes />} />
        </Routes>
    </>
  )
}

export default App
