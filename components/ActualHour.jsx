import React, { useEffect, useState } from 'react'

export const ActualHour = () => {

    const [hour, setHour] = useState()

    useEffect(() => {
      const interval = setInterval(()=>{
        const date = new Date()
        console.log(date)
      }, 1000)
      interval
    }, [])
    
  return (
    <div>ActualHour</div>
  )
}
