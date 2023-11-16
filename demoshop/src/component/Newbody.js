import React ,{useState} from 'react'
import Image from '../image/pic.png'
import ReactPlayer from 'react-player'

const Newbody = () => {
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }
    const [like,setLike] = useState(0);
    function inc(){
        setLike(like+1)
    }
   
    const[fruits,setFruits] =useState([
        {fruit:'water mellon'},
        {fruit:'apple'},
        {fruit:'mango'}
    ])
    const[index,setIndex]=useState(0)

    function change(){
        const newIndex=(index+1)%fruits.length
        setIndex(newIndex)
    }
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <div className='bodycont'>
       <img src={Image} alt="Not loaded" width="300px" height="300px"  />
    
    <div className='btn'>
     <div style={{display:'flex', justifyContent:'space-between'}}>
     <button onClick={()=>inc(0)}>Like
     <div className='likes'> {like}</div></button>
           <input id='content' type='text' placeholder='Comment...'></input>
     </div>
   </div>
<div style={{backgroundColor:'black', width:'400px' ,height:'250px'}}>
<div className="connt">
    <label htmlFor="Name" className="btn">Name=</label>
    <input className="btn" type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <p className='btn'>output: {text}</p>
    <button className='btn' onClick={reset}>Reset</button>
</div>
</div>
<div>
   <p>Fruit:{fruits[index].fruit}</p>
   <button onClick={change}>Change Fruit</button>
</div>
    </div>
     
 </div>
  )
}

export default Newbody