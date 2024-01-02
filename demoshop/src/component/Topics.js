import React from 'react'
import {
    ArrowLeftIcon
} from '@heroicons/react/24/solid';
import  Image from '../image/Land.png'
import Astro from '../image/Astro.png'


const Topics = () => {
  return (
    <div className='container'>
        
        <div className='navbar'>
         <h1 className='menu'> <ArrowLeftIcon style={{width:[30]}}/>MENU</h1>
        <h1 className='open'>Open Topics</h1>
        </div>
        <div>
            <div className='content1'>
                <h2 className='heading1'>REACT</h2>

                <button className='button1'>APPLY</button>
            </div>
        </div>
        <div>
            <div className='content2'>
                <h2 className='heading2'>PYTHON</h2>
                <button className='button2'>APPLY</button>
            </div>
        </div>
        <div>
            <div className='content3'>
                <h2 className='heading3'>DEVEOPS</h2>
                <button className='button3'>APPLY</button>
            </div>
        </div>
        <div className='astro'>
            <img src={Astro} alt='not loaded' height={220} />

        </div>
        <div className='land'>
            <img src={Image} alt='not loaded' width={1510} height={215}/>
        </div>











    </div>
  )
}

export default Topics
