import './App.css'
import Button from 'components/Button/Button'
import { useState } from 'react'
import Statistics from 'components/Statistics/Statistics'
import Loading from 'components/Loading/Loading'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 3000);


  const handleClick = (e) => {
    const val = e.target.className;
    if (val === "good") {
      setGood(good+1);
    } else if (val === "neutral") {
      setNeutral(neutral+1);
    } else {
      setBad(bad+1);
    }
  }

  if (loading) {
    return <Loading />;
  }

  
  return (
    <div>
        <h1>give feedback</h1>
        <Button text={"good"} onClick={handleClick}/>
        <Button text={"neutral"} onClick={handleClick}/>
        <Button text={"bad"} onClick={handleClick}/>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
