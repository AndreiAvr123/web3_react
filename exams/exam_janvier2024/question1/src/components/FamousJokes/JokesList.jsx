import { useContext, useState } from 'react';
import { Context as FamousJokesContext } from '../../contexts/FamousJokesContext';

const JokesList = () => {
    const { getAllFamousJokes, updateJokeImage } = useContext(FamousJokesContext);
    const jokes = getAllFamousJokes();
    const [newImageUrls, setNewImageUrls] = useState({});

  

    const handleImageChange = (id, newImageUrl) => {
        setNewImageUrls({ ...newImageUrls, [id]: newImageUrl });
    };

    const handleUpdateImage = (id) => {
        const newImageUrl = newImageUrls[id];
        if (newImageUrl) {
            updateJokeImage(id, newImageUrl);
            setNewImageUrls({ ...newImageUrls, [id]: '' });
        }
    };

    return (
        <div>
            <h1>Gestion des Blagues Célèbres</h1>
            <ul>
                {jokes.map(joke => (
                    <li key={joke.id}>
                        <b>Nom:</b> {joke.name}
                        <br />
                        <b>Blague:</b> {joke.joke}
                        <br />
                        <b>Lien de l image:</b>
                        <br />
                        <input 
                            type="text" 
                            value={newImageUrls[joke.id] || joke.imageUrl} 
                            onChange={(e) => handleImageChange(joke.id, e.target.value)} 
                        />
                        <button onClick={() => handleUpdateImage(joke.id)}>Mettre à jour l’image</button>
                        <br />
                        <img src={joke.imageUrl} alt={joke.name} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JokesList;
