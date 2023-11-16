import React from 'react'

const First = () => {
  
  function click(name){
    console.log(name)
  }
  function without()
  {
    console.log("without parameter")
  }
  return (
    <div className='cont'>
      <h2>Header </h2>
    <button onClick={() => { click('Bimmi') } }>click here</button>
    <button onClick={without}>Without parameter</button></div>
    
   
  )
}

export default First