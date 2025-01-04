import React from 'react'

const Weatherdisplay = ({weather}) => {

    const {temperature , conditions} = weather;

    const temperaturecolor = temperature>20?"red":"blue";

  return (
    <div>
         <p style={{ fontSize: '18px' }}>
        Temperature: <span style={{ color: temperaturecolor }}>{temperature}</span>
      </p>
      <p style={{ fontSize: '18px' }}>Conditions: {conditions}</p>

    </div>
  )
}

export default Weatherdisplay