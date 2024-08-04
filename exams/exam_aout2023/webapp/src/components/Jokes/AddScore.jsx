import React, { useState, useContext } from 'react'
import { Context as ScoresContext } from 'contexts/JokeContext'

const AddScore = ({ idJoke }) => {
    const { createAScore } = useContext(ScoresContext)

    const [username, setUsername] = useState("")
    const [scoreValue, setScoreValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        createAScore({
            username,
            score: parseInt(scoreValue),
            joke: idJoke
        })
        setUsername("")
        setScoreValue("")
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handleScoreChange = (e) => {
        setScoreValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
            />
            <br />
            <input
                type="number"
                placeholder="score"
                min="0"
                max="10"
                value={scoreValue}
                onChange={handleScoreChange}
            />
            <br />
            <button type="submit">Add Score</button>
        </form>
    )
}

export default AddScore