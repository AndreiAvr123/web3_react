import Button from 'components/Button/Button'
import Display from 'components/Display/Display'

import useLocalStorage from 'hooks/useLocalStorage'

import './App.css'

const ITEM_KEY = "counter"

const App = () => {
  const [ counter, setCounter ] = useLocalStorage(ITEM_KEY, 0)

  const changeCount = (delta) => {
    setCounter(counter + delta)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button
        changeCount={changeCount}
        delta={1}
        text='plus'
      />
      <Button
        changeCount={changeCount}
        delta={-counter}
        text='zero'
      />     
      <Button
        changeCount={changeCount}
        delta={-1}
        text='minus'
      />           
    </div>
  )
}

export default App
