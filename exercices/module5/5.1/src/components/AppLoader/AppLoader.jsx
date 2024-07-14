import { CounterProvider } from "contexts/countersContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <CounterProvider >
        <App />
      </CounterProvider >
  )
}

export default AppLoader;