import React from "react"
import Header from "./Header";
import Squarebox from "./Squarebox";
import Input from "./Input";
import { useState } from "react";

function App() {
   const [color,setColor] = useState('')
   const [hexColor,setHexColor] = useState('')
   const [isDarkText,setIsDarkText] = useState(false)
  
  return (
    <div className="App">
      <Header />
      <Squarebox 
         color={color}
         hexColor={hexColor}
         isDarkText={isDarkText}
      />
      <Input 
         color={color} 
         setColor={setColor} 
         setHexColor={setHexColor}
         isDarkText={isDarkText}
         setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
