import React, { useState } from 'react'

const InputDeleteFirstWord = () => {

    const [userText, setUserText] = useState("")

    const handleDeleteText = () => {
        const newText = structuredClone(userText);
        const words = newText.split(" ");
        words.shift()
        setUserText(words.join(" "))
    }
  return (
    <div>
        
        <input onChange={(e)=>{setUserText(e.target.value)}} placeholder='Write a sentence'></input>
        <button onClick={()=>{handleDeleteText()}}>Delete first word</button>
        <br/>
        {userText}
        
    </div>
  )
}

export default InputDeleteFirstWord