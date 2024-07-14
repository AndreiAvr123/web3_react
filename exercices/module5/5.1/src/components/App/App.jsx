import GoodButton from 'components/GoodButton/GoodButton'
import OkButton from 'components/OkButton/OkButton'
import BadButton from 'components/BadButton/BadButton'
import ResetButton from 'components/ResetButton/ResetButton'

function App() {

  return (
    <>
      <ul> 
          <GoodButton />
          <OkButton />
          <BadButton />
      </ul>
      <ResetButton />
    </>
  )
}

export default App
