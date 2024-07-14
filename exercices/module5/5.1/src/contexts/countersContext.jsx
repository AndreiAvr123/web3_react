import React, { useState } from "react";

const CounterContext = React.createContext(null)

const CounterProvider = (props) => {
    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)
    

    const increaseGood = () => setGood(good + 1)
    const increaseOk = () => setOk(ok + 1)
    const increaseBad = () => setBad(bad + 1)
    const resetAll = () => {
        setGood(0)
        setOk(0)
        setBad(0)
    }

    const exposedValue = {
        good,
        ok,
        bad,
        increaseGood,
        increaseOk,
        increaseBad,
        resetAll,
    }

    return (
        <CounterContext.Provider value={exposedValue}>
            {props.children}
        </CounterContext.Provider>
    )
}

export { CounterProvider, CounterContext };
