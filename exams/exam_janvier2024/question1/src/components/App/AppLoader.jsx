import { ProviderWrapper as FamousJokesProvider } from "contexts/FamousJokesContext.jsx";
// import { BrowserRouter as Router } from 'react-router-dom';
import App from "components/App/App.jsx";

const AppLoader = () => {
    return (
        <FamousJokesProvider >
                <App />
        </FamousJokesProvider >
    )
}

export default AppLoader;