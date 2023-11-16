import React from 'react'
import Newbody from './component/Newbody'
import Videooo from './component/Videooo'
const App = () => {
  
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Newbody/>
      <div style={{margin:'780px 20px 10px 400px',justifyContent:'center',alignItems:'center'}}> <Videooo/></div>
      
    </div>
  )
}

export default App