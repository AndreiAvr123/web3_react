import React, { useState } from "react";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)
  
    const increaseGood = () => {
      const updatedGood = good + 1
      setGood(updatedGood)
    }
  
  
    const increaseOk = () => {
      const updatedOk = ok + 1
      setOk(updatedOk)
    }
  
    const increaseBad = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
    }
  
    const resetAll = () => {
      setGood(0)
      setOk(0)
      setBad(0)
    }

    const exposedValue = {
        good,
        increaseGood,
        ok,
        increaseOk,
        bad,
        increaseBad,
        resetAll,
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>;
}

export {
    Context,
    ProviderWrapper,
}