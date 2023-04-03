import { useState } from 'react'
import './App.css'
import Button from './common/Button'
import Input from './common/Input'
import Login from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
