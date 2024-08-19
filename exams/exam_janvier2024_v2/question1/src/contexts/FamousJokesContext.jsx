import React, { useState, useEffect } from "react";
import jokeApi from "services/jokeApi";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

   const [jokes, setJokes] = useState([])
   
    useEffect(() => {
        jokeApi.getAll().then(data => setJokes(data))
    }
    , [])

    const getAllJokes = () => jokes;


  const updateJokeImage = async (id, newImageUrl) => {
    try {
      // Envoie une requête PATCH à l'API pour mettre à jour l'image
      await jokeApi.update(id, { imageUrl: newImageUrl });

      // Re-fetch les blagues pour obtenir les données mises à jour
      const updatedJokes = await jokeApi.getAll();
      setJokes(updatedJokes);
    } catch (error) {
      console.error("Failed to update joke image:", error);
    }
  };



    const exposedValue = {
       getAllJokes,
       updateJokeImage
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}

export { ProviderWrapper, Context };