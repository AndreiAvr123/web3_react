import {ProviderWrapper as SortedOpinionsProvider } from "contexts/sortedOpinions";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <SortedOpinionsProvider >
        <App />
      </SortedOpinionsProvider >
  )
}

export default AppLoader;