import React, { useState } from 'react'

const InputDeleteFirstWord = () => {

    const [userText, setUserText] = useState("")

    const handleDeleteText = () => {
        const newText = structuredClone(userText);
        const words = newText.split(" ");
        const deletedFirstWord = words.slice(1,-1).join(" ")
        console.log(deletedFirstWord)
    }
  return (
    <div>
        
        <input onChange={(e)=>{setUserText(e.target.value)}} placeholder='Write a sentence'></input>
        <button onClick={()=>{handleDeleteText()}}>Delete first word</button>
        
    </div>
  )
}

export default InputDeleteFirstWord