import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainRoute from './Routes/MainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainRoute />
    </div>
  )
}

export default App
