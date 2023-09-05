import React from 'react'

const Squarebox = ({color,hexColor,isDarkText}) => {
  return (
    <div className="squarebox"
       style={{
        backgroundColor:color,
        color:isDarkText ? "#000" : "#fff"
       }}
    >
      <p>{ color ? color : "Empty Value"}</p>
      <p>{hexColor ? hexColor :null}</p>
    </div>
  )
}

export default Squarebox