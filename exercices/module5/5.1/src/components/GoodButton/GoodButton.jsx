import { useContext } from "react";
import { CounterContext } from "contexts/countersContext";

const GoodButton = () => {
    const { good, increaseGood } = useContext(CounterContext)

    return (
        <li>Good: {good} <button onClick={increaseGood}> increase good</button> </li>
    )
}

export default GoodButton;