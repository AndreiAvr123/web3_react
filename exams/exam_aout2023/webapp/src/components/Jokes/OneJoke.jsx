import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Context as JokesContext } from "contexts/JokeContext"

const OneJoke = () => {

    const { getJokeWithScores } = useContext(JokesContext)
    const id = useParams().id

    const joke = getJokeWithScores(id);
    
    return (
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
            <b> AllScores : </b> {joke.scores.map((score) => (
                <div key={score.id}>
                    username : {score.username}
                    <br />
                    date : {score.date}
                    <br />
                    score : {score.score}
                    <br />
                    joke : {score.joke}
                    <br />
                    id : {score.id}
                    <br />
                    <br />
                </div>))}
        </li>
    )
}

export default OneJoke