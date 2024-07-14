import { useContext } from "react";
import { CounterContext } from "contexts/countersContext";

const BadButton = () => {
    const { bad, increaseBad } = useContext(CounterContext)

    return (
        <li>Bad: {bad} <button onClick={increaseBad}> increase bad</button> </li>
    )
}

export default BadButton;