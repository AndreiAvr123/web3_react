import { useState, useEffect } from 'react'
import Menu from '../Menu/Menu'
import AnecdoteList from '../Anecdotes/AnecdoteList'
import Anecdote from '../Anecdotes/Anecdote'
import About from '../About/About'
import CreateNew from '../CreateNew/CreateNew'
import Footer from '../Footer/Footer'
import Notification from 'components/Notification/Notification'
import { Routes, Route, useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')


  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`a new anecdote ${anecdote.content} created!`);
    navigate('/')
  }

  const clearNotificationWithDelay = () => {
    setTimeout(() => setNotification(''), 5000);
  };

  useEffect(clearNotificationWithDelay, [notification]);

  /** 
    const anecdoteById = (id) =>
      anecdotes.find(a => a.id === id)
  
    const vote = (id) => {
      const anecdote = anecdoteById(id)
  
      const voted = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
  
      setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
    }
  */
 
  return (
    <>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification && <Notification message={notification} />}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/anecdote/:id" element={<Anecdote anecdotes={anecdotes} />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
