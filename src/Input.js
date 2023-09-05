import React from 'react'
import colorNames from 'colornames'

const Input = ({color,setColor,setHexColor,isDarkText,setIsDarkText}) => {
  return (
    <div className='inputs'>
      <input 
        autoFocus
        type="text"
        id="addcolor"
        placeholder='Add color name'
        required
        value={color}
        onChange={(e)=> 
          {
          setColor(e.target.value);
          setHexColor(colorNames(e.target.value));
        }
      }
      />
      <button
         type="button"
         onClick={()=> setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </div>
  )
}

export default Input