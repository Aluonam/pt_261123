import React, { useEffect, useState } from 'react'

export const ActualHour = () => {

    const [hour, setHour] = useState("00:00:00")
    const [date, setDate] = useState("DD/MM/YY")

    useEffect(() => {
      const interval = setInterval(()=>{
            const totalDate = new Date()
            const onlyHour = totalDate.toLocaleString().split(",")[1]
            const onlyDate = totalDate.toLocaleDateString().split(",")[0]
            setHour(onlyHour)
            setDate(onlyDate)
            }, 1000)
        return () => clearInterval(interval)
     
    }, [])
    
  return (
    <div>{date}{hour}</div>
  )
}
