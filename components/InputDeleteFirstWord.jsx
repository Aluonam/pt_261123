import React, { useState } from 'react'

const InputDeleteFirstWord = () => {

    const [userText, setUserText] = useState("")
  return (
    <div>
        {userText}
        <input onChange={(e)=>{setUserText(e.target.value)}} placeholder='Write a sentence'></input>
        <button onClick={()=>{}}>Delete first word</button>
        
    </div>
  )
}

export default InputDeleteFirstWord