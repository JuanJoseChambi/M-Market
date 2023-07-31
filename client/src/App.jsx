import { useState } from 'react'
import { Home, Details } from './components/views'
import './App.css'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Details/> 
    </>
  )
}

export default App
