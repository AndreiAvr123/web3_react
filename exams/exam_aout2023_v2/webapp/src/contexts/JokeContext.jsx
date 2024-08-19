import React, { useState, useEffect } from "react";
import JokesAPI from "services/jokeApi";
import ScoresAPI from "services/scoreApi";
// import { v4 as uuid } from "uuid";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [jokes, setJokes] = useState([])
    const [scores, setScores] = useState([])

    const initialLoad = () => {
        JokesAPI.getAllJokes().then((joke) => {
            setJokes(joke);
        });

        ScoresAPI.getAllScores().then((score) => {
            setScores(score);
        });
      
    }

    useEffect(() => {
        initialLoad();
    }, []);

   function scoreCount(jokeId) {
        return scores.filter((score) => score.joke === jokeId).length;
    } 

    function averageScore(jokeId) {
        const scoreByJokeId = scores.filter((score) => score.joke === jokeId);
        const totalScore = scoreByJokeId.reduce((acc, score) => acc + score.score, 0);
        return totalScore / scoreByJokeId.length || 0;
    }
   
    const getAllJokes = () => {
        return jokes.map((joke) => ({
          ...joke,
          scoreCount: scoreCount(joke.id),
          averageScore: averageScore(joke.id),
          scores : scores.filter((score) => score.joke === joke.id)
        }));
      };

      const getJokeWithScores = (id) => {
            return {
                ...jokes.find((joke) => joke.id === id),
                scoreCount: scoreCount(id),
                averageScore: averageScore(id),
                scores : scores.filter((score) => score.joke === id).sort((a, b) => b.score - a.score).sort((a, b) => a.date.localeCompare(b.date))
            }
        };

        const createAScore = (newScore) => {
            ScoresAPI.createAScore(newScore).then((createdScore) => {
                setScores([...scores, createdScore]);
            });
        };

    const exposedValue = {
        getAllJokes,
        getJokeWithScores,
        createAScore
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}

export { ProviderWrapper, Context };