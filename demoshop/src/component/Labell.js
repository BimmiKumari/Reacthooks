import React, { useState } from 'react'

const Body = () => {

    const [text, setText] = useState('')
    function reset() {
        setText('')
    }
    return (
        <div>
            <label htmlFor="Name">Name : </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

            <p>output : {text}</p>

            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Body