import { useState } from 'react'
import './App.css'
import Button from './common/Button'
import Input from './common/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button name="submit" color="pink"  onClick={() => console.log("This will show pink")}/>
      <Button name="submit" color="green"  onClick={() => console.log("This will show green")}/>
      <Button name="submit" color="blue"  onClick={() => console.log("This will show blue")}/>
      <Input />
    </div>
  )
}

export default App
