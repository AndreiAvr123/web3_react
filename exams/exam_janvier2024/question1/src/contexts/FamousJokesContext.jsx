import React, { useState, useEffect } from "react";
import JokeAPI from "../services/JokeAPI";
const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [jokes, setJokes] = useState([])

    const initialLoad = async () => {
        try {
            const jokesData = await JokeAPI.getAll();
            setJokes(jokesData);
        } catch (error) {
            console.error('Failed to load jokes:', error);
        }
    };

    useEffect(() => {
        initialLoad();
    }, []);

    const getAllFamousJokes = () => jokes

    const updateJokeImage = async (id, newImageUrl) => {
        // Récupérer la blague existante
        const currentJoke = jokes.find(joke => joke.id === id);
        
        if (currentJoke) {
          // Préparer les données mises à jour
          const updatedJoke = {
            ...currentJoke,
            imageUrl: newImageUrl
          };
          
          // Envoyer les données mises à jour au backend
          await JokeAPI.update(id, updatedJoke);
    
          // Mettre à jour l'état local
          setJokes(jokes.map(joke => (joke.id === id ? updatedJoke : joke)));
        }
      };

    const exposedValue = {
        getAllFamousJokes,
        updateJokeImage
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}

export { ProviderWrapper, Context };