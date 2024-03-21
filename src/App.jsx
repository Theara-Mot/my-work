import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import './App.css'
import Footer from './Footer'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
