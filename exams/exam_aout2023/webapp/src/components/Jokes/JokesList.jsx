import { useContext } from "react"
import { Context as JokesContext } from "contexts/JokeContext"
import AddScore from "./AddScore"

const JokesList = () => {
    const { getAllJokes } = useContext(JokesContext)

    return (
        <div>
            <h1>Jokes</h1>
            <ul>
                {getAllJokes().map((joke) => (
                    <div key={joke.id}>
                        <li>
                            <b> Question : </b>  {joke.question}
                            <br />
                            <b> Answer : </b>{joke.answer}
                            <br />
                            <b> Category : </b> {joke.category}
                            <br />
                            <b> Id : </b> {joke.id}
                            <br />
                            <b> Score Count : </b> {joke.scoreCount}
                            <br />
                            <b> Average Score : </b> {joke.averageScore}
                            <br />
                            <b> AllScores : </b>  {joke.scores.length > 0 ? (
                                joke.scores.map((score) => (
                                    <div key={score.id}>
                                        <b>username:</b> {score.username}
                                        <br />
                                        <b>date:</b> {score.date}
                                        <br />
                                        <b>score:</b> {score.score}
                                        <br />
                                        <b>joke:</b> {score.joke}
                                        <br />
                                        <b>id:</b> {score.id}
                                        <br />
                                        <br />
                                    </div>
                                ))
                            ) : (
                                <div>Aucun score pour cette blague</div>
                            )}
                        </li>
                        <br />
                        <AddScore idJoke={joke.id} />
                        <br />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default JokesList