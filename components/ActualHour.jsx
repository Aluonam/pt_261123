import React, { useEffect, useState } from 'react'

export const ActualHour = () => {

    const [hour, setHour] = useState()

    useEffect(() => {
      const interval = setInterval(()=>{
            const date = new Date()
            const onlyNumber = date.toLocaleDateString()
            console.log(onlyNumber)
            }, 1000)
        return () => clearInterval(interval)
     
    }, [])
    
  return (
    <div>ActualHour</div>
  )
}
