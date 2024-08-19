import { ProviderWrapper as FamousJokesProviderWrapper } from "contexts/FamousJokesContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "components/App/App.jsx";

const AppLoader = () => {
    return (
        <FamousJokesProviderWrapper >
            <Router>
                <App />
            </Router>
        </FamousJokesProviderWrapper >
    )
}

export default AppLoader;