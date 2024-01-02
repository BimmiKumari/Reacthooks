import React from 'react'
import Loginn from './component/Loginn'
import Topics from './component/Topics'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const App = () => {
   return (
   <div className="App">
    <BrowserRouter>
    <Routes>
      <Route
       path="/"
       element={<Loginn/>}
      />
      <Route
       path="/topics"
       element={<Topics/>}
      />
    </Routes>
    
    
    </BrowserRouter>
      
      
    
        
    </div>
  )
}

export default App