import { useEffect, useState } from "react"


export const Greeting = () => {

  const currentTime = new Date()
  const currentHour = currentTime.getHours()
  let greeting = 'Puto'

  if ( currentHour < 12 ) {
    greeting = "Buenos Dias"
  } else if ( currentHour < 18 ) {
    greeting = "Buenas Tardes"
  } else {
    greeting = "Buenas Noches"
  }

  return (
    <div className="title-container" style={{padding: "2rem" }}>
      <h1 className="text-6xl greetings">{greeting}</h1>
    </div>
  )
}