import { useContext, useState } from "react";
import { Context as FamousJokesContext } from "contexts/FamousJokesContext";

const FamousJokes = () => {
    const { getAllJokes, updateJokeImage } = useContext(FamousJokesContext);
    const jokes = getAllJokes();

    const [newImageUrls, setNewImageUrls] = useState({});

    // Gère la modification du lien d'image
    const handleImageChange = (id, newImageUrl) => {
        setNewImageUrls({ ...newImageUrls, [id]: newImageUrl });
    };

    // Gère la mise à jour de l'image via la requête PATCH
    const handleUpdateImage = async (id) => {
        const newImageUrl = newImageUrls[id];
        if (newImageUrl) {
            await updateJokeImage(id, newImageUrl);
        }
    };

    return (
        <>
            <h1>Manage Jokes</h1>
            <div>
                <ul>
                    {jokes.map(joke => <li key={joke.id}>
                        {joke.name}
                        <br />
                        {joke.joke}
                        <br />
                        <input
                            type="text"
                            value={newImageUrls[joke.id] || joke.imageUrl}
                            onChange={(e) => handleImageChange(joke.id, e.target.value)}
                        />
                        <button onClick={() => handleUpdateImage(joke.id)}>
                            Update Image
                        </button>
                        <br />
                        <img src={joke.imageUrl} alt="" width="200" height="200" />
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export default FamousJokes;