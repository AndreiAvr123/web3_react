import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "components/Home/Home"
import JokesList from "components/FamousJokes/JokesList"
import './App.css'

function App() {

  return (
    <>
      <Router>
        <nav>
          <h2><Link to="/">Home</Link></h2>
          <h2><Link to="/famous-jokes">Gestion de blagues</Link></h2>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/famous-jokes" element={<JokesList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
