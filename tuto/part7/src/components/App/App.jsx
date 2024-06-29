import { useState }  from 'react'
import ReactDOM from 'react-dom/client'

const Home = () => (
  <div> <h2>TKTL notes app</h2> 
        <p> Et hanc quidem praeter oppida multa duae civitates exornant Seleucia opus Seleuci regis, 
          et Claudiopolis quam deduxit coloniam Claudius Caesar. Isaura enim antehac nimium potens, olim subversa ut rebellatrix
           interneciva aegre vestigia claritudinis pristinae monstrat admodum pauca. </p>
  </div>
)

const Notes = () => (
  <div> <h2>Notes</h2> 
        <ul>
          <li> HTML is easy </li>
          <li> Browser can execute javascript </li>
          <li> Browser talks to server with HTML </li>
        </ul>
  </div>
)

const Users = () => (
  <div> <h2>Users</h2> 
        <ul>
          <li> Nath </li>
          <li> Spider-man </li>
        </ul>
  </div>
)

const App = () => {
  const [page, setPage] = useState('home')

  const toPage = (page) => (event) => {
    event.preventDefault()
    setPage(page)
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <div>
        <a href="" onClick={toPage('home')} style={padding}>
          home
        </a>
        <a href="" onClick={toPage('notes')} style={padding}>
          notes
        </a>
        <a href="" onClick={toPage('users')} style={padding}>
          users
        </a>
      </div>

      {content()}

      <p> <i> Note app, Deprtment of Computer Science 2000 </i> </p>
    </div>
  )
}


export default App
