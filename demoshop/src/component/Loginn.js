import React from 'react'
import Image from '../image/build.png'
import Image1 from '../image/back1.png'
import Image2 from '../image/back2.png'
import Image3 from '../image/back3.png'
import logincard from '../image/Card.png'
import enter from '../image/enter.png'
import rcb from '../image/RCB.png'
import spaceship from '../image/Spaceship.png'
import { Link } from 'react-router-dom'
const Loginn = () => {
  return (
    <div className='login'>
        <div className='back2'>
        <img src={Image2} alt='not loaded' height='100px' width='1490px' />  
        </div>
        <div className='back3'>
        <img src={Image3} alt='not loaded' height='100px' width='1490px' />   
        </div>
        <div className='back1'>
        <img src={Image1} alt='not loaded' width='1490px' />
        </div>
        <div className='build'>
        <img src={Image} alt='not loaded' height='460px' width='1490px'/>
        </div>
       

        <div className='rcb'>
            <img src={rcb} alt='not loaded' width='340px' height='140px'/>
        </div>

        <div className='loginbox'>
        <img src={logincard} alt='not loaded' width='670px' height='400px'/>
        </div>

        <div className='logincontent'>
            <div className='log'>
                LOGIN
            </div>
            <label>USERNAME</label>
           <input type='text' placeholder='Enter username'></input>
           <label>PASSWORD</label>
           <input type='text' placeholder='Enter Password'></input>
           <div className='enter'>
           <img src={enter} alt='not loaded' width='120px' height='50px'/>
           <div className='enterbutton'>
           <Link to="/topics"> <button>Enter</button></Link>
           </div>
          </div>
          
        </div>
        <div className='spaceship'>
            <img src={spaceship} alt='not loaded'/>
        </div>
    </div>
  )
}

export default Loginn