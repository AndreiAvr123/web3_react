import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'

const tabNotes = [
    {
        id: 1,
        note: "HTML is easy",
    },
    {
        id: 2,
        note: "Browser can execute only Javascript",
    },
    {
        id: 3,
        note: "GET and POST are the most important methods of HTTP protocol",
    }
    // notes={tabNotes}
];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={tabNotes} />)
