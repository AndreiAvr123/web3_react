import { ProviderWrapper as JokesProvider } from "contexts/JokeContext";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "components/App/App.jsx";

const AppLoader = () => {
    return (
        <JokesProvider >
            <Router>
                <App />
            </Router>
        </JokesProvider >
    )
}

export default AppLoader;