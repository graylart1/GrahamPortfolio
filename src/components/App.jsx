import { useState } from 'react'
import footer from '/src/components/footer'
import '/src/styles/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <footer />
     </Router> 
      
    </>
  )
}

export default App
