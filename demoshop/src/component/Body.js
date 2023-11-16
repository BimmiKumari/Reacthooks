
import React,{useState} from 'react'
const Body = () => {

    const [like,setLike] = useState(0);
     const [content, setContent] = useState('')

    function inc(){
        setLike(like+1)
    }
   

  return (
    <div className='bodycont'><h1>BODY</h1>
    <div className='para'>
    <h2>Discription</h2>
    <p >
        In most development environments, the use of Pascal case versus camel
         case is a convention, not a necessity. Code will still compile and run
         , regardless of which naming convention is used. The proper use of Pascal case and camel 
         case is intended to make code more readable and maintainable. It is not a compiler requirement.

    </p>
   <div className='btn'>
    <div style={{display:'flex', justifyContent:'space-between'}}>
   <button onClick={()=>inc(0)}>Like
   <div className='likes'> {like}</div></button>
   <input id='content' type='text' placeholder='Comment...'></input>
   
   
   </div>
   </div>
    </div>
    </div>
  )
}

export default Body