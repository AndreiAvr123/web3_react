import { useContext } from "react";
import { CounterContext } from "contexts/countersContext";

const OkButton = () => {
    const { ok, increaseOk } = useContext(CounterContext)

    return (
        <li>Ok: {ok} <button onClick={increaseOk}> increase ok</button> </li>
    )
}

export default OkButton;